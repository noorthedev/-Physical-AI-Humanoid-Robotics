// frontend/src/components/Auth/AuthButton.tsx
import React, { useEffect, useState } from 'react';
import { authService } from '../../services/authService';
import { User } from '../../types/user';
import Link from '@docusaurus/Link';
import { useHistory } from '@docusaurus/router';

const AuthButton: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;

    const checkAuthStatus = async () => {
      setIsLoading(true);

      // Timeout wrapper that RETURNS null instead of throwing
      const timeoutPromise = new Promise<null>((resolve) =>
        setTimeout(() => resolve(null), 4000)
      );

      try {
        const localUser = authService.getUser();

        if (!localUser) {
          if (isMounted) setCurrentUser(null);
          return;
        }

        // SAFE: never throws → always returns User or null
        const verifiedUser = (await Promise.race([
          authService.getMe().catch(() => null),
          timeoutPromise,
        ])) as User | null;

        if (verifiedUser) {
          if (isMounted) setCurrentUser(verifiedUser);
        } else {
          console.warn("Backend not responding → Logging out locally.");
          authService.logout();
          if (isMounted) setCurrentUser(null);
        }
      } catch (err) {
        console.error("Auth error:", err);
        authService.logout();
        if (isMounted) setCurrentUser(null);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    checkAuthStatus();

    // Listener for login/logout in other tabs
    const handleStorage = () => checkAuthStatus();
    window.addEventListener("storage", handleStorage);

    return () => {
      isMounted = false;
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const handleLogout = () => {
    authService.logout();
    setCurrentUser(null);
    setShowDropdown(false);
    history.push('/');
  };

  // Loading UI
  if (isLoading) {
    return (
      <div className="navbar__item" style={{ padding: "6px 12px" }}>
        ⏳ Loading...
      </div>
    );
  }

  // Not logged in
  if (!currentUser) {
    return (
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <Link className="button button--primary" to="/login">
          Login
        </Link>
        <Link className="button button--secondary" to="/signup">
          Sign Up
        </Link>
      </div>
    );
  }

  // Logged in
  return (
    <div style={{ position: "relative" }}>
      <button
        className="navbar__item"
        onClick={() => setShowDropdown(!showDropdown)}
        style={{
          padding: "6px 12px",
          borderRadius: "6px",
          display: "flex",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            backgroundColor: "var(--ifm-color-primary)",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          {currentUser.name?.charAt(0)?.toUpperCase()}
        </div>

        <span style={{ fontSize: "14px", maxWidth: "120px" }}>
          {currentUser.name}
        </span>

        <span style={{ fontSize: "12px" }}>{showDropdown ? "▲" : "▼"}</span>
      </button>

      {showDropdown && (
        <>
          <div
            style={{
              position: "absolute",
              right: 0,
              top: "100%",
              marginTop: "8px",
              background: "var(--ifm-background-surface-color)",
              border: "1px solid var(--ifm-color-emphasis-300)",
              borderRadius: "8px",
              minWidth: "200px",
              zIndex: 1000,
              padding: "10px 0",
            }}
          >
            <div style={{ padding: "12px 16px" }}>
              <strong>{currentUser.name}</strong>
              <br />
              <span style={{ fontSize: "12px", color: "#555" }}>
                {currentUser.email}
              </span>
              <div
                style={{
                  marginTop: "6px",
                  fontSize: "11px",
                  color: "var(--ifm-color-primary)",
                }}
              >
                Level: {currentUser.preferences?.level || "N/A"}
              </div>
            </div>

            <button
              onClick={handleLogout}
              style={{
                width: "100%",
                padding: "10px 16px",
                border: "none",
                background: "transparent",
                textAlign: "left",
                color: "var(--ifm-color-danger)",
                cursor: "pointer",
              }}
            >
              🚪 Logout
            </button>
          </div>

          {/* Click outside area */}
          <div
            onClick={() => setShowDropdown(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 900,
            }}
          />
        </>
      )}
    </div>
  );
};

export default AuthButton;
