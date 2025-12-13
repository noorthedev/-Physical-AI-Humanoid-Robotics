# Vercel Deployment Configuration for Frontend

## Backend URL Configuration

The frontend has been configured to connect to your Railway backend at:
```
https://web-production-7311.up.railway.app
```

## Files Updated

1. **`static/config.js`** - Updated production backend URL to point to your Railway backend
2. **`docusaurus.config.ts`** - Updated to read from `NEXT_PUBLIC_BACKEND_URL` environment variable

## Vercel Environment Variables

To complete the deployment setup, you need to add the following environment variable in your Vercel project settings:

### Step-by-Step Instructions:

1. Go to your Vercel project: https://vercel.com/dashboard
2. Navigate to your project: **Hackathon1** (https://hackathon1-wheat.vercel.app/)
3. Click on **Settings** tab
4. Click on **Environment Variables** in the left sidebar
5. Add a new environment variable:
   - **Name**: `NEXT_PUBLIC_BACKEND_URL`
   - **Value**: `https://web-production-7311.up.railway.app`
   - **Environment**: Select all (Production, Preview, Development)
6. Click **Save**
7. Go to the **Deployments** tab
8. Click the three dots menu (...) on your latest deployment
9. Select **Redeploy** to apply the new environment variable

## Current Configuration

The frontend will automatically use the Railway backend URL in production. The configuration works as follows:

- **Local development**: Uses `http://localhost:8000`
- **Production (Vercel)**: Uses `https://web-production-7311.up.railway.app`

## Testing the Chatbot

Once deployed, your chatbot should work correctly:

1. Visit https://hackathon1-wheat.vercel.app/
2. Open the chatbot interface
3. Send a message
4. The chatbot will connect to your Railway backend at https://web-production-7311.up.railway.app/api/query

## Verification

To verify the backend URL is configured correctly:

1. Open your deployed site in a browser
2. Open browser developer console (F12)
3. You should see: `Backend API URL configured: https://web-production-7311.up.railway.app`

## Files Modified

- [`static/config.js`](file:///d:/syeda%20Gulzar%20Bano/Hackathon-1-AIBOOK/static/config.js) - Updated production backend URL
- [`docusaurus.config.ts`](file:///d:/syeda%20Gulzar%20Bano/Hackathon-1-AIBOOK/docusaurus.config.ts) - Added NEXT_PUBLIC_BACKEND_URL support

## Next Steps

1. **Commit and push** these changes to GitHub:
   ```bash
   git add .
   git commit -m "Configure backend URL for Railway deployment"
   git push origin main
   ```

2. **Redeploy on Vercel** (it should trigger automatically from the git push, or manually redeploy)

3. **Test the chatbot** to ensure it connects to the backend properly

## Environment Variable for Local Development (Optional)

If you want to test with the Railway backend locally, create a `.env.local` file:

```env
NEXT_PUBLIC_BACKEND_URL=https://web-production-7311.up.railway.app
```

Note: `.env.local` is in `.gitignore` and won't be committed to the repository.
