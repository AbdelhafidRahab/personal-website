# CI/CD Status Badge

```markdown
![CI/CD](https://github.com/AbdelhafidRahab/personal-website/actions/workflows/ci.yml/badge.svg)
```

Replace `AbdelhafidRahab` with your actual GitHub username.

## What the CI/CD Pipeline Does

### On Every Push/PR:

1. **Code Quality Job**
   - Runs ESLint to catch code issues
   - Checks Prettier formatting
   - Runs TypeScript type checking

2. **Build Verification Job**
   - Installs dependencies
   - Builds the production bundle
   - Uploads build artifacts (for debugging)

### Benefits:

- ✅ Catches bugs before they reach production
- ✅ Ensures code quality standards
- ✅ Prevents broken builds from being merged
- ✅ Provides confidence when deploying

## Local Testing

Before pushing, you can run the same checks locally:

```bash
npm run lint           # ESLint
npm run format:check   # Prettier
npx tsc --noEmit       # TypeScript
npm run build          # Build verification
```

## Deployment (Optional)

The `deploy.yml.template` file contains examples for:

- Netlify
- Custom server via SSH

Uncomment and configure based on your hosting platform.
