
```
PracticeTestAutomation
├─ cypress
│  ├─ e2e
│  │  ├─ features
│  │  │  ├─ customer
│  │  │  │  ├─ customer-deposit.feature
│  │  │  │  ├─ customer-transactions.feature
│  │  │  │  └─ customer-withdrawal.feature
│  │  │  └─ manager
│  │  │     ├─ manager-add-customer.feature
│  │  │     ├─ manager-customer-management.feature
│  │  │     └─ manager-open-account.feature
│  │  └─ step_definitions
│  │     ├─ commonSteps.js
│  │     ├─ customer
│  │     │  ├─ customer-deposit.js
│  │     │  ├─ customer-transactions.js
│  │     │  └─ customer-withdrawal.js
│  │     └─ manager
│  │        ├─ manager-add-customer.js
│  │        ├─ manager-customer-management.js
│  │        └─ manager-open-account.js
│  ├─ fixtures
│  │  └─ example.json
│  ├─ pages
│  │  ├─ basePage.js
│  │  ├─ customerDashboard.js
│  │  ├─ login.js
│  │  ├─ managerDashboard.js
│  │  └─ transactionsPage.js
│  ├─ reports
│  │  ├─ cucumber-report.json
│  │  └─ html
│  │     ├─ assets
│  │     │  ├─ css
│  │     │  │  ├─ font-awesome.css
│  │     │  │  ├─ styles.css
│  │     │  │  └─ styles.min.css
│  │     │  ├─ images
│  │     │  │  └─ logo.png
│  │     │  ├─ js
│  │     │  │  └─ apex-charts.js
│  │     │  └─ webfonts
│  │     │     ├─ fa-brands-400.woff2
│  │     │     ├─ fa-regular-400.woff2
│  │     │     ├─ fa-solid-900.woff2
│  │     │     └─ fa-v4compatibility.woff2
│  │     ├─ features
│  │     │  ├─ 1af7c508-6d6f-47b9-856e-596e09063892-manager-customer-management.html
│  │     │  ├─ 2ab2fc05-02fb-4784-af20-54c9b28af042-manager-open-account.html
│  │     │  ├─ 35add336-5d52-4062-bf95-7bec0a53f2ca-manager-customer-management.html
│  │     │  ├─ 40ffcd90-3573-432a-bbb8-52ca2d2fc270-manager-add-customer.html
│  │     │  ├─ 50f5ce30-5b2a-4267-b550-d1b5eafeedad-manager-add-customer.html
│  │     │  ├─ 59e23906-80e6-420d-a4ca-8aa4a0c2ca58-manager-open-account.html
│  │     │  ├─ 6624e5b3-4a9b-4137-bacb-2a46c761df35-customer-withdrawal.html
│  │     │  ├─ 68e68cef-0691-4dde-b7f4-6ad5646745ba-customer-withdrawal.html
│  │     │  ├─ 7395efc7-c7dd-4ca6-9b8b-fb479e329eaa-customer-transactions.html
│  │     │  ├─ 765c5226-fc45-4a89-90cb-550e2b10efc3-manager-customer-management.html
│  │     │  ├─ 84ab7c4b-1726-4097-9e16-b2d02e2ca8bc-manager-open-account.html
│  │     │  ├─ 88fdfd69-4cd2-46c8-83d3-f27b13504969-customer-deposit.html
│  │     │  ├─ 9312d286-ecd7-442c-a7f0-43dc1f1b5ae9-manager-add-customer.html
│  │     │  ├─ 9d364c9c-f8c3-419f-9e68-b8d2d89761bc-manager-customer-management.html
│  │     │  ├─ a37d98e2-20be-4ee3-b9a3-d4843a70a0fc-customer-transactions.html
│  │     │  ├─ b1ac0f01-db33-43f1-9daf-d1d7be8f6da8-customer-transactions.html
│  │     │  ├─ c5434054-4936-49ee-9cc4-dacfae5a4ffb-manager-open-account.html
│  │     │  ├─ cd096146-4265-46e4-80af-2b87475c4ade-customer-transactions.html
│  │     │  ├─ d4f9bb98-78d8-4f56-b5a0-9633c15848af-customer-withdrawal.html
│  │     │  ├─ d8f2494a-56f0-423a-81d9-8ad46a573f2e-customer-deposit.html
│  │     │  ├─ e4790841-6375-44ee-a275-758b520ea924-customer-deposit.html
│  │     │  ├─ ecbb16a2-3a79-4f44-a5a6-3c287df7cdc0-manager-add-customer.html
│  │     │  └─ fb1d677b-bfb9-4e96-9b55-aba1b080c65d-customer-withdrawal.html
│  │     ├─ index.html
│  │     ├─ scripts
│  │     │  ├─ charts.js
│  │     │  ├─ main.js
│  │     │  ├─ modal.js
│  │     │  ├─ scenarios.js
│  │     │  ├─ table.js
│  │     │  ├─ theme.js
│  │     │  └─ utils.js
│  │     └─ styles.min.css
│  ├─ screenshots
│  ├─ support
│  │  ├─ commands.js
│  │  └─ e2e.js
│  └─ videos
│     ├─ customer
│     │  ├─ customer-deposit.feature.mp4
│     │  ├─ customer-transactions.feature.mp4
│     │  └─ customer-withdrawal.feature.mp4
│     └─ manager
│        ├─ manager-add-customer.feature.mp4
│        ├─ manager-customer-management.feature.mp4
│        └─ manager-open-account.feature.mp4
├─ cypress.config.js
├─ generate-report.mjs
├─ package-lock.json
└─ package.json

```