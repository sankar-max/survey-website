export const surveySections = [
  {
    title: "Survey Creation",
    subtitle: "User-Friendly Interface:",
    description:
      "ZettaSurvey offers an intuitive interface for users to create surveys without requiring advanced technical skills.",
    imageSrc: "/feature/Frame.png",
    altText: "Survey Creation Image",
  },
  {
    title: "Uses of Multilingual Surveys",
    items: [
      "You can create a multilingual survey with different language options by adding your own translations.",
      "With a single survey, your survey takers can choose the language they’re most comfortable with from a drop down menu.",
      "You can send a link that automatically opens the survey in the selected language.",
    ],
    imageSrc: "/feature/Frame.png",
    altText: "Multilingual Surveys Image",
  },
  {
    title: "Uses of Automation & Workflows",
    description:
      "Extend capabilities using workflows, APIs, webhooks, and integrations. Connect with your everyday applications, create efficient workflows, and automate business processes. Schedule and automate your periodic surveys using the Recurring feature. Configure once and forget.",
    imageSrc: "/feature/Uses of Automation & workflows.png",
    altText: "Automation & Workflows Image",
  },
  {
    title: "Uses of Skip Logic",
    items: [
      "A respondent only sees relevant questions, so the time spent completing the survey reduces drastically.",
      "The simplest use of skip logic is in a situation when respondents need not view a few questions.",
      "Employee satisfaction surveys: Skip logic can help present the right questions to the respondents.",
      "Event planning: Ask presenters whether they’ll need them and then for how long or how many.",
    ],
    imageSrc: "/feature/skiplogic.png",
    altText: "Skip Logic Image",
  },
  {
    title: "Uses of Survey Branching",
    description: "",
    details: [
      {
        label: "Conditional Survey Branching:",
        text: "Conditional branching is used when a condition must be met while answering the survey.",
      },
      {
        label: "Unconditional Survey Branching:",
        text: "Unconditional branching occurs even if no condition is satisfied. For example, all respondents will see a 'Thank You' page irrespective of their answers.",
      },
    ],
    imageSrc: "/feature/Branching.png",
    altText: "Survey Branching Image",
  },
];

export const features = [
  {
    title: "Limits for image/multimedia files",
    description: [
      "You can upload unlimited number of files with all paid licenses. However, depending on your license level there is a limitation on the total file size.",
      "Approved File Extensions that can be uploaded.",
    ],
    image: "/feature/multimedia.png",
  },
  {
    title: "Uses of Answer_Key Features",
    description: [
      "Answer_key can set for each correct answer.",
      "It helps to review student's exam questions.",
      "This feature helps all correct answers and double check them for accuracy.​",
    ],
    image: "/feature/Answer_Key.png",
  },
  {
    title: "Uses of piping text",
    description: [
      "Piping text can be carried over to the immediate next question with the help of a piping variable.",
      "If you want the selected option from the Q1 question to appear in the Q2 text, use the $Q1 question code syntax in the Q2 question.",
      "Reusable text: As the piped text is stored in a variable that can be used in the same survey, it reduces the need to type the text again.",
      "Piping can be used in two different ways: With Question Piping, you re-use an answer in a subsequent question​ With Answer Piping, you re-use an answer in a subsequent answer",
    ],
    image: "/feature/piping.png",
  },
  {
    title: "Uses of Net Promoter Score(NPS)",
    description: [
      "You can use an NPS question to get ratings for products or services, website, store, or customer support.",
      "You can combine the NPS question with an open-ended text question to let respondents share their detailed feedback. They can let businesses know more about their expectations and improvement areas.",
      "A good NPS score also implies that your current customers are likely to buy your products in the future as well. It enables you to forecast future sales and plan your actions accordingly.",
    ],
    image: "/feature/netpromoter.png",
  },
  {
    title: "Uses of Dynamic Category",
    description: [
      "Dynamic Category is more exclusive for the respondent, which makes it more powerful and easy to respond.",
      "In this way, the survey becomes shorter and easy to respond for the customers, which motivates them to complete the survey, ultimately increasing the response rate.",
      "Dynamic Categories are a powerful way to ask for feedback from your customers interactively.",
    ],
    image: "/feature/Dynamic_category.png",
  },
];

export const featuresfirst = [
  {
    title: "Uses of the Dynamic Text",
    description: [
      "Collect supporting data: This feature enables respondents to submit an answer that is not mentioned in the survey.",
      "Avoid missing out any possibilities: It is not always practical to add all the possible answer options. Adding dynamic text enables respondents to enter such options.",
    ],
    imageSrc: "/feature/dynamic_text.png",
    altText: "Dynamic Text Image",
  },
  {
    title: "Uses of Recurring",
    description: [
      "Scheduling a recurrence makes it easier to regularly send a survey to the same group on a schedule: Daily, weekly, quarterly, or even the first Monday of every month. Configure this just once so your automated surveys will go out on schedule.",
      "Typically an email invitation allows one response per contact. With the recurring schedule enabled, once the specified increment has passed, respondents can access the original link in their invitation and will begin a new response.",
    ],
    imageSrc: "/feature/recurring.png",
    altText: "Recurring Image",
  },
  {
    title: "Uses of Mobile and Offline Survey",
    description: [
      "ZettaSurvey App Offline Surveys: With the ZettaSurvey app, you can conduct these surveys on Apple and Android devices, even when offline. The data is collected and stored on the device and is synced with your Zettasurvey account whenever online connectivity is available.",
      "Download and install the app on your mobile device. Open the app and Enter your username/key and click login to take offline survey .",
      "How do I connect my device to my Zettasurvey account?",
    ],
    imageSrc: "/feature/offline_survey.png",
    altText: "Offline Survey Image",
    links: [
      { label: "Download app from Android Apps on Google Play", href: "/" },
      { label: "Download app from the App Store", href: "/" },
    ],
  },
  {
    title: "Uses of Dynamic URL",
    description: [
      "Your survey link is the perfect way to share your survey anywhere to collect responses for a great research.",
      "For each survey there is a unique URL (link).",
      "You can post this link on multiple websites/pages as you wish. But please note the responses collected will be anonymous.",
    ],
    imageSrc: "/feature/dynamic_url.png",
    altText: "Dynamic URL Image",
  },
  {
    title: "Uses of Email Survey",
    description: [
      "One of the most popular ways to distribute surveys to potential respondents is through email invitation. Email invitations are highly customizable and gives you the ability to create templates that can be used for a specific survey or across all the surveys.",
      "You can create your own email templates (survey specific and global) and use them while sending out the survey.",
      "You can either create new template or select an existing email template that you have created from survey email templates.",
    ],
    imageSrc: "/feature/email_survey.png",
    altText: "Email Survey Image",
  },
];


export const surveySectionsfirst = [
  {
    title: "Uses of Survey Dashboard and Report",
    description:
      "We provide a real-time dashboard for your survey. As soon as you start collecting responses, real-time data with analysis is available on the survey dashboard.",
    details: [
      {
        label: "Design",
        text: "Here you can customize the theme of the dashboard.​",
      },
      {
        label: "Display",
        text: "By default, all questions are shown in the report. You can show or hide and reorder the questions.",
      },
      {
        label: "Filters",
        text: "By default, the survey status filter is set to all responses. You can add additional filters and the dashboard will be updated in real-time.",
      },
    ],
    imageSrc: "/feature/dashboard.png",
    altText: "Survey Dashboard",
    items: [],
    subtitle: "",
  },
  {
    title: "Uses of Roles and Permissions",
    subtitle: "",
    description: "",
    items: [
      "A user role represents a collection of users that are assigned permissions by an administrator to perform similar actions or functions.",
      "There are two standard roles named User and Super Admin added by default to every ZettaSurvey organization which are not editable/deletable.",
      "The super admin can add new custom roles and assign it to other users.",
      "The super admin can also provide permission to add new users to other users by selecting the user management permissions while creating a role.",
    ],
    imageSrc: "/feature/roles_permission.png",
    altText: "Roles and Permissions",
  },
  {
    title: "Uses of User Management",
    subtitle: "",
    description: "",
    items: [
      "The user permissions are the access to the features given to the user within their ZettaSurvey account.",
      "User management allows Add users, Edit users, Delete users, Add Roles, Delete Roles.",
      "You can add a list of users and download list of users.​",
      "You can assign a single role to multiple users .​",
      "You can edit a role or update some permissions for a role.​",
      "You can assign the custom role to an existing user",
    ],
    imageSrc: "/feature/user_management.png",
    altText: "User Management",
  },
  {
    title: "Uses of White-label surveys",
    description:
      "White-label your surveys and maintain brand identity. Use CSS to style surveys just the way you want. Employ custom domain to share surveys from your domain and establish trust with respondents. Customize your email surveys and share them with customers. Make surveys truly your own. No hint of ZettaSurvey.",
    items: [],
    subtitle: "",
    imageSrc: "/feature/white_label.png",
    altText: "White-label Surveys",
  },
];
