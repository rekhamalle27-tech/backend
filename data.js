/**
 * Curriculum Data
 * This file contains the entire curriculum structure, including subjects, modules, topics,
 * flashcards, and quiz questions.
 */

export const subjects = [
  {
    id: "python",
    title: "Python",
    icon: "file-code",

    modules: [
      {
        title: "Core",
        topics: [
          { id: "py-files", title: "Python Files" },
          { id: "py-loops", title: "Python Loops" },
          { id: "py-functions", title: "Python Functions" }
        ]
      }
    ]
  },

  {
    id: "web",
    title: "Web Development",
    icon: "globe",

    modules: [
      {
        title: "Core",
        topics: [
          { id: "html5", title: "HTML5" },
          { id: "css", title: "CSS" },
          { id: "css-grid", title: "CSS Grid" },
          { id: "responsive", title: "Responsive Design" },
          { id: "sass", title: "SASS Preprocessors" }
        ]
      }
    ]
  },

  {
    id: "javascript",
    title: "JavaScript Mastery",
    icon: "file-json",

    modules: [
      {
        title: "Advanced",
        topics: [
          { id: "js-functions", title: "Functions & Scope" },
          { id: "js-prototypes", title: "Prototypes & Classes" },
          { id: "js-es6", title: "ES6 Modules" },
          { id: "js-performance", title: "Performance" }
        ]
      }
    ]
  },

  {
    id: "react",
    title: "React Core",
    icon: "atom",

    modules: [
      {
        title: "Core",
        topics: [
          { id: "react-props", title: "Components & Props" },
          { id: "react-hooks", title: "State & Hooks" },
          { id: "react-context", title: "Context API" },
          { id: "react-router", title: "React Router" },
          { id: "redux", title: "Redux Toolkit" }
        ]
      }
    ]
  },

  {
    id: "backend",
    title: "Node.js",
    icon: "server",

    modules: [
      {
        title: "Backend",
        topics: [
          { id: "express", title: "Express APIs" },
          { id: "mongodb", title: "MongoDB & Mongoose" },
          { id: "sequelize", title: "Sequelize ORM" },
          { id: "jwt", title: "JWT Auth" }
        ]
      }
    ]
  },

  {
    id: "sql",
    title: "SQL",
    icon: "database",

    modules: [
      {
        title: "Database",
        topics: [
          { id: "sql-select", title: "SELECT & JOINS" },
          { id: "sql-agg", title: "Aggregate & Grouping" },
          { id: "sql-normalization", title: "Normalization" },
          { id: "sql-indexing", title: "Indexing" }
        ]
      }
    ]
  },

  {
    id: "devops",
    title: "DevOps",
    icon: "settings",

    modules: [
      {
        title: "Foundations",
        topics: [
          { id: "docker", title: "Docker" },
          { id: "github-actions", title: "GitHub Actions" },
          { id: "jenkins", title: "Jenkins" }
        ]
      }
    ]
  },

  {
    id: "security",
    title: "Cybersecurity",
    icon: "shield",

    modules: [
      {
        title: "Security",
        topics: [
          { id: "owasp", title: "OWASP" },
          { id: "xss-sql", title: "XSS & SQL Injection" },
          { id: "firewalls", title: "Firewalls & VPNs" }
        ]
      }
    ]
  },

  {
    id: "ml",
    title: "Machine Learning",
    icon: "brain",

    modules: [
      {
        title: "ML",
        topics: [
          { id: "logistic", title: "Logistic Regression" },
          { id: "kmeans", title: "K-Means Clustering" }
        ]
      }
    ]
  },

  {
    id: "ds",
    title: "Data Structures",
    icon: "git-branch",

    modules: [
      {
        title: "DSA",
        topics: [
          { id: "linkedlist", title: "Linked List" },
          { id: "stack-queue", title: "Stacks & Queues" },
          { id: "trees", title: "Binary Trees" },
          { id: "graphs", title: "Graphs" }
        ]
      }
    ]
  }
];



/**
 * Quiz questions for each topic.
 * Keyed by topic ID.
 */

export const quizzes = {

// ================= PYTHON =================

// 🔹 Python Files
"py-files": [
  { id:1, q:"Which mode is used to read a file?", a:["r","w","a","b"], correct:0 },
  { id:2, q:"Which mode overwrites file?", a:["w","r","a","x"], correct:0 },
  { id:3, q:"Append mode is?", a:["a","r","w","b"], correct:0 },
  { id:4, q:"read() does?", a:["Reads content","Writes","Deletes","Closes"], correct:0 },
  { id:5, q:"write() does?", a:["Writes data","Reads","Deletes","Closes"], correct:0 },
  { id:6, q:"close() does?", a:["Closes file","Reads","Writes","Deletes"], correct:0 },
  { id:7, q:"with open() ensures?", a:["Auto close","Error","Loop","None"], correct:0 },
  { id:8, q:"Binary read mode?", a:["rb","r","w","a"], correct:0 },
  { id:9, q:"File object is?", a:["Handler","Loop","Variable","Class"], correct:0 },
  { id:10, q:"File handling used for?", a:["Storage","UI","Loop","CSS"], correct:0 }
],

// 🔹 Python Loops
"py-loops": [
  { id:1, q:"Loop used for?", a:["Repetition","Condition","Class","Function"], correct:0 },
  { id:2, q:"For loop iterates over?", a:["Sequence","Only numbers","None","Error"], correct:0 },
  { id:3, q:"While loop runs until?", a:["Condition false","True","Stop","Break"], correct:0 },
  { id:4, q:"Break keyword?", a:["Exit loop","Skip","Print","Stop"], correct:0 },
  { id:5, q:"Continue keyword?", a:["Skip iteration","Stop loop","Exit","Print"], correct:0 },
  { id:6, q:"Range() used for?", a:["Generate sequence","Loop","List","Error"], correct:0 },
  { id:7, q:"Nested loop?", a:["Loop inside loop","Single","Error","None"], correct:0 },
  { id:8, q:"Infinite loop?", a:["Never stops","Stops","Error","None"], correct:0 },
  { id:9, q:"Else in loop runs when?", a:["Loop completes","Break","Error","Skip"], correct:0 },
  { id:10, q:"While condition type?", a:["Boolean","String","List","Number"], correct:0 }
],

// 🔹 Python Functions
"py-functions": [
  { id:1, q:"Function is?", a:["Reusable block","Loop","Variable","Class"], correct:0 },
  { id:2, q:"Define function keyword?", a:["def","func","function","define"], correct:0 },
  { id:3, q:"Return does?", a:["Send output","Stop loop","Print","Delete"], correct:0 },
  { id:4, q:"Arguments are?", a:["Inputs","Outputs","Errors","Loops"], correct:0 },
  { id:5, q:"Default arguments?", a:["Predefined values","Random","None","Error"], correct:0 },
  { id:6, q:"Lambda function?", a:["Anonymous","Loop","Class","Module"], correct:0 },
  { id:7, q:"Recursion?", a:["Function calls itself","Loop","Error","None"], correct:0 },
  { id:8, q:"Scope defines?", a:["Variable access","Loop","Error","None"], correct:0 },
  { id:9, q:"Global keyword?", a:["Access global var","Loop","Delete","Print"], correct:0 },
  { id:10, q:"Docstring?", a:["Documentation","Loop","Error","Variable"], correct:0 }
],
    


  /* ================= HTML5 ================= */
  "html5": [
    {
      id: 1,
      q: "What is the purpose of the <!DOCTYPE html> declaration?",
      a: [
        "Defines document type",
        "Adds styling",
        "Executes JavaScript",
        "Creates elements"
      ],
      correct: 0
    },
    {
      id: 2,
      q: "Which tag is used for semantic navigation?",
      a: ["<nav>", "<div>", "<section>", "<span>"],
      correct: 0
    },
    {
      id: 3,
      q: "Which tag is used for inserting an image?",
      a: ["<img>", "<image>", "<src>", "<pic>"],
      correct: 0
    },
    {
      id: 4,
      q: "Which attribute specifies image source?",
      a: ["href", "src", "alt", "link"],
      correct: 1
    },
    {
      id: 5,
      q: "Which tag defines a section?",
      a: ["<section>", "<block>", "<area>", "<group>"],
      correct: 0
    },
    {
      id: 6,
      q: "What does <article> represent?",
      a: [
        "Independent content",
        "Navigation links",
        "Image container",
        "Footer"
      ],
      correct: 0
    },
    {
      id: 7,
      q: "Which input type is used for email?",
      a: ["text", "email", "mail", "input-email"],
      correct: 1
    },
    {
      id: 8,
      q: "Which tag is used for video?",
      a: ["<media>", "<video>", "<movie>", "<play>"],
      correct: 1
    },
    {
      id: 9,
      q: "Which tag is used for header?",
      a: ["<header>", "<top>", "<head-section>", "<hgroup>"],
      correct: 0
    },
    {
      id: 10,
      q: "What is semantic HTML?",
      a: [
        "Meaningful tags",
        "Styling HTML",
        "JavaScript usage",
        "CSS framework"
      ],
      correct: 0
    }
  ],

  /* ================= CSS ================= */
  "css": [
    {
      id: 1,
      q: "What does CSS stand for?",
      a: [
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Creative Style System",
        "Color Style Sheets"
      ],
      correct: 0
    },
    {
      id: 2,
      q: "Which property changes text color?",
      a: ["font-color", "text-color", "color", "fgcolor"],
      correct: 2
    },
    {
      id: 3,
      q: "How do you select an element with id?",
      a: ["#id", ".id", "id", "*id"],
      correct: 0
    },
    {
      id: 4,
      q: "How do you select class?",
      a: [".class", "#class", "class", "*class"],
      correct: 0
    },
    {
      id: 5,
      q: "Which property controls spacing?",
      a: ["margin", "spacing", "gap", "padding"],
      correct: 0
    },
    {
      id: 6,
      q: "Which is box model property?",
      a: ["margin", "padding", "border", "All"],
      correct: 3
    },
    {
      id: 7,
      q: "How to make text bold?",
      a: ["font-weight", "text-bold", "bold", "weight"],
      correct: 0
    },
    {
      id: 8,
      q: "Which property sets background?",
      a: ["bg-color", "background", "color-bg", "back"],
      correct: 1
    },
    {
      id: 9,
      q: "What does display:flex do?",
      a: [
        "Creates flexible layout",
        "Adds animation",
        "Changes color",
        "None"
      ],
      correct: 0
    },
    {
      id: 10,
      q: "Which unit is relative?",
      a: ["px", "em", "cm", "mm"],
      correct: 1
    }
  ],

  /* ================= CSS GRID ================= */
  "css-grid": [
    {
      id: 1,
      q: "Which property enables grid?",
      a: ["display:grid", "grid:start", "enable:grid", "grid:layout"],
      correct: 0
    },
    {
      id: 2,
      q: "What defines columns?",
      a: ["grid-template-columns", "grid-columns", "columns", "col-grid"],
      correct: 0
    },
    {
      id: 3,
      q: "What defines rows?",
      a: ["grid-template-rows", "grid-rows", "rows", "row-grid"],
      correct: 0
    },
    {
      id: 4,
      q: "Gap between items?",
      a: ["gap", "margin", "padding", "space"],
      correct: 0
    },
    {
      id: 5,
      q: "What is fr unit?",
      a: [
        "Fractional unit",
        "Fixed unit",
        "Pixel unit",
        "Font unit"
      ],
      correct: 0
    },
    {
      id: 6,
      q: "Auto-fit vs auto-fill?",
      a: [
        "Responsive columns",
        "Color difference",
        "Alignment",
        "None"
      ],
      correct: 0
    },
    {
      id: 7,
      q: "Which aligns items?",
      a: ["align-items", "text-align", "justify", "float"],
      correct: 0
    },
    {
      id: 8,
      q: "Which centers grid?",
      a: ["place-items:center", "center", "align:center", "grid:center"],
      correct: 0
    },
    {
      id: 9,
      q: "Grid vs Flex?",
      a: [
        "2D vs 1D",
        "Same",
        "Flex faster",
        "Grid faster"
      ],
      correct: 0
    },
    {
      id: 10,
      q: "Which sets grid area?",
      a: ["grid-area", "area", "grid-box", "grid-space"],
      correct: 0
    }
  ],

  /* ================= RESPONSIVE ================= */
  "responsive": [
    {
      id: 1,
      q: "What is responsive design?",
      a: [
        "Adapts to screen size",
        "Adds animation",
        "Fix layout",
        "None"
      ],
      correct: 0
    },
    {
      id: 2,
      q: "Which is used for responsiveness?",
      a: ["media queries", "loops", "functions", "API"],
      correct: 0
    },
    {
      id: 3,
      q: "Viewport meta tag is for?",
      a: [
        "Mobile scaling",
        "Color",
        "Font",
        "Animation"
      ],
      correct: 0
    },
    {
      id: 4,
      q: "Which unit is flexible?",
      a: ["%", "px", "cm", "mm"],
      correct: 0
    },
    {
      id: 5,
      q: "@media is used for?",
      a: [
        "Responsive rules",
        "Animation",
        "Functions",
        "Variables"
      ],
      correct: 0
    },
    {
      id: 6,
      q: "Mobile-first means?",
      a: [
        "Design for mobile first",
        "Desktop only",
        "Tablet only",
        "None"
      ],
      correct: 0
    },
    {
      id: 7,
      q: "Which helps layout?",
      a: ["flexbox", "loop", "array", "function"],
      correct: 0
    },
    {
      id: 8,
      q: "Which unit is scalable?",
      a: ["rem", "px", "cm", "mm"],
      correct: 0
    },
    {
      id: 9,
      q: "Breakpoint means?",
      a: [
        "Screen width condition",
        "Error",
        "Bug",
        "Stop"
      ],
      correct: 0
    },
    {
      id: 10,
      q: "Responsive images use?",
      a: ["max-width", "width fixed", "height fixed", "none"],
      correct: 0
    }
  ],

  /* ================= SASS ================= */
  "sass": [
    {
      id: 1,
      q: "What is SASS?",
      a: [
        "CSS preprocessor",
        "JS framework",
        "Database",
        "Server"
      ],
      correct: 0
    },
    {
      id: 2,
      q: "Variables in SASS use?",
      a: ["$", "#", "@", "%"],
      correct: 0
    },
    {
      id: 3,
      q: "Nesting is used for?",
      a: [
        "Cleaner structure",
        "Animation",
        "Loops",
        "Database"
      ],
      correct: 0
    },
    {
      id: 4,
      q: "Mixins are?",
      a: [
        "Reusable styles",
        "Variables",
        "Functions",
        "Selectors"
      ],
      correct: 0
    },
    {
      id: 5,
      q: "Include mixin?",
      a: ["@include", "@use", "@import", "@mixin"],
      correct: 0
    },
    {
      id: 6,
      q: "Partials start with?",
      a: ["_", "#", "$", "%"],
      correct: 0
    },
    {
      id: 7,
      q: "Extends used for?",
      a: [
        "Reuse styles",
        "Animation",
        "JS",
        "API"
      ],
      correct: 0
    },
    {
      id: 8,
      q: "SASS compiles to?",
      a: ["CSS", "JS", "HTML", "JSON"],
      correct: 0
    },
    {
      id: 9,
      q: "Which file extension?",
      a: [".scss", ".sass", "Both", ".css"],
      correct: 2
    },
    {
      id: 10,
      q: "SASS advantage?",
      a: [
        "Reusable code",
        "Slower",
        "Complex",
        "None"
      ],
      correct: 0
    }
  ],

  /* ================= FUNCTIONS & SCOPE ================= */
  "js-functions": [
    {
      id: 1,
      q: "What is a JavaScript function?",
      a: [
        "A reusable block of code",
        "A variable",
        "A loop",
        "An object"
      ],
      correct: 0
    },
    {
      id: 2,
      q: "How do you declare a function?",
      a: [
        "function myFunc() {}",
        "def myFunc()",
        "create myFunc()",
        "func myFunc()"
      ],
      correct: 0
    },
    {
      id: 3,
      q: "What is a return statement?",
      a: [
        "Returns value from function",
        "Ends program",
        "Prints output",
        "Declares variable"
      ],
      correct: 0
    },
    {
      id: 4,
      q: "What is local scope?",
      a: [
        "Variables inside function",
        "Global variables",
        "Browser scope",
        "Server scope"
      ],
      correct: 0
    },
    {
      id: 5,
      q: "What is global scope?",
      a: [
        "Accessible everywhere",
        "Only inside function",
        "Only inside loop",
        "None"
      ],
      correct: 0
    },
    {
      id: 6,
      q: "What is arrow function?",
      a: [
        "Short function syntax",
        "Loop",
        "Object",
        "Array"
      ],
      correct: 0
    },
    {
      id: 7,
      q: "Which keyword defines variable?",
      a: ["let", "int", "var()", "define"],
      correct: 0
    },
    {
      id: 8,
      q: "What is closure?",
      a: [
        "Function with preserved scope",
        "Loop",
        "Array",
        "Class"
      ],
      correct: 0
    },
    {
      id: 9,
      q: "Function parameters are?",
      a: [
        "Inputs",
        "Outputs",
        "Variables",
        "Conditions"
      ],
      correct: 0
    },
    {
      id: 10,
      q: "What is callback?",
      a: [
        "Function passed as argument",
        "Loop",
        "Variable",
        "Return"
      ],
      correct: 0
    }
  ],

  /* ================= PROTOTYPES & CLASSES ================= */
  "js-prototypes": [
    {
      id: 1,
      q: "What is a prototype in JavaScript?",
      a: [
        "Object inheritance mechanism",
        "Function call",
        "Loop",
        "Variable"
      ],
      correct: 0
    },
    {
      id: 2,
      q: "Every object has?",
      a: [
        "Prototype",
        "Loop",
        "Class only",
        "None"
      ],
      correct: 0
    },
    {
      id: 3,
      q: "Prototype chain means?",
      a: [
        "Linked objects inheritance",
        "Loop chain",
        "Array chain",
        "None"
      ],
      correct: 0
    },
    {
      id: 4,
      q: "What is class in JS?",
      a: [
        "Blueprint for objects",
        "Function only",
        "Loop",
        "API"
      ],
      correct: 0
    },
    {
      id: 5,
      q: "Which keyword defines class?",
      a: ["class", "define", "object", "create"],
      correct: 0
    },
    {
      id: 6,
      q: "Constructor is?",
      a: [
        "Special method",
        "Loop",
        "Variable",
        "API"
      ],
      correct: 0
    },
    {
      id: 7,
      q: "Inheritance uses?",
      a: ["extends", "inherit", "use", "superclass"],
      correct: 0
    },
    {
      id: 8,
      q: "super() is used for?",
      a: [
        "Call parent constructor",
        "Loop",
        "Variable",
        "Return"
      ],
      correct: 0
    },
    {
      id: 9,
      q: "Method inside class is?",
      a: [
        "Function",
        "Variable",
        "Loop",
        "Object"
      ],
      correct: 0
    },
    {
      id: 10,
      q: "Prototype vs Class?",
      a: [
        "Both used for OOP",
        "Same syntax",
        "Only prototype works",
        "None"
      ],
      correct: 0
    }
  ],

  /* ================= ES6 MODULES ================= */
  "js-es6": [
    {
      id: 1,
      q: "What is ES6?",
      a: [
        "JavaScript version",
        "Framework",
        "Library",
        "API"
      ],
      correct: 0
    },
    {
      id: 2,
      q: "Import keyword is used for?",
      a: [
        "Import modules",
        "Export modules",
        "Run code",
        "Loop"
      ],
      correct: 0
    },
    {
      id: 3,
      q: "Export keyword does?",
      a: [
        "Expose module",
        "Run module",
        "Delete module",
        "None"
      ],
      correct: 0
    },
    {
      id: 4,
      q: "Default export means?",
      a: [
        "Single export",
        "Multiple exports",
        "No export",
        "Loop"
      ],
      correct: 0
    },
    {
      id: 5,
      q: "Named export allows?",
      a: [
        "Multiple exports",
        "Single export",
        "No export",
        "Loop"
      ],
      correct: 0
    },
    {
      id: 6,
      q: "Which file type supports modules?",
      a: [".js", ".html", ".css", ".json"],
      correct: 0
    },
    {
      id: 7,
      q: "Type='module' is used in?",
      a: [
        "<script>",
        "<link>",
        "<style>",
        "<div>"
      ],
      correct: 0
    },
    {
      id: 8,
      q: "Modules are?",
      a: [
        "Reusable files",
        "Functions",
        "Loops",
        "Variables"
      ],
      correct: 0
    },
    {
      id: 9,
      q: "Tree shaking removes?",
      a: [
        "Unused code",
        "Variables",
        "Functions",
        "Loops"
      ],
      correct: 0
    },
    {
      id: 10,
      q: "Modules improve?",
      a: [
        "Code organization",
        "Performance only",
        "UI",
        "Database"
      ],
      correct: 0
    }
  ],

  /* ================= PERFORMANCE ================= */
  "js-performance": [
    {
      id: 1,
      q: "What affects JS performance?",
      a: [
        "Code efficiency",
        "Color",
        "Font",
        "HTML"
      ],
      correct: 0
    },
    {
      id: 2,
      q: "Debouncing means?",
      a: [
        "Limit function calls",
        "Increase speed",
        "Loop",
        "None"
      ],
      correct: 0
    },
    {
      id: 3,
      q: "Throttling is?",
      a: [
        "Control execution rate",
        "Loop",
        "Variable",
        "API"
      ],
      correct: 0
    },
    {
      id: 4,
      q: "Lazy loading?",
      a: [
        "Load when needed",
        "Load all",
        "Delete data",
        "Cache"
      ],
      correct: 0
    },
    {
      id: 5,
      q: "Minification does?",
      a: [
        "Reduce file size",
        "Increase size",
        "Delete code",
        "Run faster"
      ],
      correct: 0
    },
    {
      id: 6,
      q: "Caching improves?",
      a: [
        "Performance",
        "UI",
        "Design",
        "None"
      ],
      correct: 0
    },
    {
      id: 7,
      q: "Async code helps?",
      a: [
        "Non-blocking",
        "Blocking",
        "Loop",
        "None"
      ],
      correct: 0
    },
    {
      id: 8,
      q: "Promise is?",
      a: [
        "Async result",
        "Loop",
        "Object",
        "Array"
      ],
      correct: 0
    },
    {
      id: 9,
      q: "Event loop handles?",
      a: [
        "Async tasks",
        "Variables",
        "CSS",
        "HTML"
      ],
      correct: 0
    },
    {
      id: 10,
      q: "Optimization means?",
      a: [
        "Improve performance",
        "Reduce code",
        "Delete code",
        "None"
      ],
      correct: 0
    }
  ]
,


  /* ================= COMPONENTS & PROPS ================= */
  "react-props": [
    {
      id: 1,
      q: "What is a React component?",
      a: [
        "Reusable UI block",
        "Database",
        "CSS file",
        "Server"
      ],
      correct: 0
    },
    {
      id: 2,
      q: "What are props in React?",
      a: [
        "Data passed to components",
        "State variables",
        "Functions only",
        "Hooks"
      ],
      correct: 0
    },
    {
      id: 3,
      q: "Props are?",
      a: [
        "Read-only",
        "Mutable",
        "Deleted",
        "Loop"
      ],
      correct: 0
    },
    {
      id: 4,
      q: "Which syntax passes props?",
      a: [
        "<Comp name='John' />",
        "Comp(name)",
        "props = {}",
        "useProps()"
      ],
      correct: 0
    },
    {
      id: 5,
      q: "Functional component is?",
      a: [
        "JS function returning JSX",
        "Class",
        "Loop",
        "Object"
      ],
      correct: 0
    },
    {
      id: 6,
      q: "JSX stands for?",
      a: [
        "JavaScript XML",
        "JSON XML",
        "Java Syntax",
        "JS Extend"
      ],
      correct: 0
    },
    {
      id: 7,
      q: "Props improve?",
      a: [
        "Reusability",
        "Performance only",
        "CSS",
        "Database"
      ],
      correct: 0
    },
    {
      id: 8,
      q: "How to access props?",
      a: [
        "props.name",
        "this.name",
        "getProps()",
        "useProps"
      ],
      correct: 0
    },
    {
      id: 9,
      q: "Default props are?",
      a: [
        "Fallback values",
        "Mandatory values",
        "State",
        "Hooks"
      ],
      correct: 0
    },
    {
      id: 10,
      q: "Children props refer to?",
      a: [
        "Nested content",
        "State",
        "Hooks",
        "Loop"
      ],
      correct: 0
    }
  ],

  /* ================= STATE & HOOKS ================= */
  "react-hooks": [
    {
      id: 1,
      q: "What is state in React?",
      a: [
        "Component data",
        "CSS",
        "HTML",
        "API"
      ],
      correct: 0
    },
    {
      id: 2,
      q: "useState is used for?",
      a: [
        "Managing state",
        "Routing",
        "Styling",
        "API calls"
      ],
      correct: 0
    },
    {
      id: 3,
      q: "useEffect is used for?",
      a: [
        "Side effects",
        "State",
        "Loop",
        "Variable"
      ],
      correct: 0
    },
    {
      id: 4,
      q: "Hooks work in?",
      a: [
        "Functional components",
        "Class only",
        "HTML",
        "CSS"
      ],
      correct: 0
    },
    {
      id: 5,
      q: "State updates are?",
      a: [
        "Async",
        "Sync",
        "Loop",
        "None"
      ],
      correct: 0
    },
    {
      id: 6,
      q: "useRef is used for?",
      a: [
        "DOM reference",
        "State",
        "Loop",
        "API"
      ],
      correct: 0
    },
    {
      id: 7,
      q: "useMemo helps?",
      a: [
        "Optimize performance",
        "Routing",
        "State",
        "Loop"
      ],
      correct: 0
    },
    {
      id: 8,
      q: "useCallback returns?",
      a: [
        "Memoized function",
        "State",
        "Object",
        "Array"
      ],
      correct: 0
    },
    {
      id: 9,
      q: "Hook rules?",
      a: [
        "Top-level only",
        "Inside loops",
        "Anywhere",
        "None"
      ],
      correct: 0
    },
    {
      id: 10,
      q: "Custom hooks are?",
      a: [
        "Reusable logic",
        "Components",
        "CSS",
        "Database"
      ],
      correct: 0
    }
  ],

  /* ================= CONTEXT API ================= */
  "react-context": [
    {
      id: 1,
      q: "Context API is used for?",
      a: [
        "Global state",
        "Routing",
        "Styling",
        "Loop"
      ],
      correct: 0
    },
    {
      id: 2,
      q: "createContext does?",
      a: [
        "Creates context",
        "Deletes state",
        "Routing",
        "API"
      ],
      correct: 0
    },
    {
      id: 3,
      q: "Provider is used for?",
      a: [
        "Pass data",
        "Get data",
        "Loop",
        "None"
      ],
      correct: 0
    },
    {
      id: 4,
      q: "useContext is used for?",
      a: [
        "Consume context",
        "Create context",
        "Delete",
        "Loop"
      ],
      correct: 0
    },
    {
      id: 5,
      q: "Context avoids?",
      a: [
        "Prop drilling",
        "State",
        "Hooks",
        "Loop"
      ],
      correct: 0
    },
    {
      id: 6,
      q: "Global state means?",
      a: [
        "Accessible everywhere",
        "Local only",
        "Loop",
        "None"
      ],
      correct: 0
    },
    {
      id: 7,
      q: "Multiple contexts?",
      a: [
        "Allowed",
        "Not allowed",
        "Error",
        "Loop"
      ],
      correct: 0
    },
    {
      id: 8,
      q: "Context works with?",
      a: [
        "Hooks",
        "Loops",
        "Arrays",
        "CSS"
      ],
      correct: 0
    },
    {
      id: 9,
      q: "Context improves?",
      a: [
        "State management",
        "Styling",
        "Database",
        "None"
      ],
      correct: 0
    },
    {
      id: 10,
      q: "Context alternative?",
      a: [
        "Redux",
        "CSS",
        "HTML",
        "Loop"
      ],
      correct: 0
    }
  ],

  /* ================= REACT ROUTER ================= */
  "react-router": [
    {
      id: 1,
      q: "React Router is used for?",
      a: [
        "Navigation",
        "State",
        "CSS",
        "Database"
      ],
      correct: 0
    },
    {
      id: 2,
      q: "Route defines?",
      a: [
        "Path + component",
        "State",
        "Loop",
        "API"
      ],
      correct: 0
    },
    {
      id: 3,
      q: "Link is used for?",
      a: [
        "Navigation",
        "API",
        "State",
        "Loop"
      ],
      correct: 0
    },
    {
      id: 4,
      q: "useNavigate is used for?",
      a: [
        "Programmatic navigation",
        "State",
        "Loop",
        "CSS"
      ],
      correct: 0
    },
    {
      id: 5,
      q: "BrowserRouter wraps?",
      a: [
        "App",
        "Component",
        "Loop",
        "State"
      ],
      correct: 0
    },
    {
      id: 6,
      q: "Dynamic routes use?",
      a: [
        ":id",
        "#id",
        "$id",
        "@id"
      ],
      correct: 0
    },
    {
      id: 7,
      q: "Nested routes?",
      a: [
        "Routes inside routes",
        "Loop",
        "State",
        "None"
      ],
      correct: 0
    },
    {
      id: 8,
      q: "useParams returns?",
      a: [
        "Route params",
        "State",
        "Loop",
        "Array"
      ],
      correct: 0
    },
    {
      id: 9,
      q: "Switch replaced by?",
      a: [
        "Routes",
        "Route",
        "Link",
        "Nav"
      ],
      correct: 0
    },
    {
      id: 10,
      q: "Router improves?",
      a: [
        "Navigation",
        "Performance",
        "CSS",
        "Database"
      ],
      correct: 0
    }
  ],

  /* ================= REDUX TOOLKIT ================= */
  "redux": [
    {
      id: 1,
      q: "Redux is used for?",
      a: [
        "State management",
        "Routing",
        "Styling",
        "Database"
      ],
      correct: 0
    },
    {
      id: 2,
      q: "Store holds?",
      a: [
        "State",
        "Functions",
        "CSS",
        "HTML"
      ],
      correct: 0
    },
    {
      id: 3,
      q: "Action is?",
      a: [
        "Event object",
        "State",
        "Loop",
        "Variable"
      ],
      correct: 0
    },
    {
      id: 4,
      q: "Reducer is?",
      a: [
        "State updater",
        "Loop",
        "Function",
        "API"
      ],
      correct: 0
    },
    {
      id: 5,
      q: "Redux Toolkit simplifies?",
      a: [
        "Redux setup",
        "Routing",
        "CSS",
        "HTML"
      ],
      correct: 0
    },
    {
      id: 6,
      q: "createSlice does?",
      a: [
        "Creates reducer + actions",
        "Delete state",
        "Routing",
        "Loop"
      ],
      correct: 0
    },
    {
      id: 7,
      q: "Dispatch is used for?",
      a: [
        "Send action",
        "Get state",
        "Loop",
        "API"
      ],
      correct: 0
    },
    {
      id: 8,
      q: "useSelector gets?",
      a: [
        "State",
        "Action",
        "Loop",
        "CSS"
      ],
      correct: 0
    },
    {
      id: 9,
      q: "Middleware is?",
      a: [
        "Between dispatch & reducer",
        "Loop",
        "State",
        "CSS"
      ],
      correct: 0
    },
    {
      id: 10,
      q: "Redux advantage?",
      a: [
        "Centralized state",
        "Slow",
        "Complex UI",
        "None"
      ],
      correct: 0
    }
  ]
,


  /* ================= COMPONENTS & PROPS ================= */
  "react-props": [
    {
      id: 1,
      q: "What is a React component?",
      a: [
        "Reusable UI block",
        "Database",
        "CSS file",
        "Server"
      ],
      correct: 0
    },
    {
      id: 2,
      q: "What are props in React?",
      a: [
        "Data passed to components",
        "State variables",
        "Functions only",
        "Hooks"
      ],
      correct: 0
    },
    {
      id: 3,
      q: "Props are?",
      a: [
        "Read-only",
        "Mutable",
        "Deleted",
        "Loop"
      ],
      correct: 0
    },
    {
      id: 4,
      q: "Which syntax passes props?",
      a: [
        "<Comp name='John' />",
        "Comp(name)",
        "props = {}",
        "useProps()"
      ],
      correct: 0
    },
    {
      id: 5,
      q: "Functional component is?",
      a: [
        "JS function returning JSX",
        "Class",
        "Loop",
        "Object"
      ],
      correct: 0
    },
    {
      id: 6,
      q: "JSX stands for?",
      a: [
        "JavaScript XML",
        "JSON XML",
        "Java Syntax",
        "JS Extend"
      ],
      correct: 0
    },
    {
      id: 7,
      q: "Props improve?",
      a: [
        "Reusability",
        "Performance only",
        "CSS",
        "Database"
      ],
      correct: 0
    },
    {
      id: 8,
      q: "How to access props?",
      a: [
        "props.name",
        "this.name",
        "getProps()",
        "useProps"
      ],
      correct: 0
    },
    {
      id: 9,
      q: "Default props are?",
      a: [
        "Fallback values",
        "Mandatory values",
        "State",
        "Hooks"
      ],
      correct: 0
    },
    {
      id: 10,
      q: "Children props refer to?",
      a: [
        "Nested content",
        "State",
        "Hooks",
        "Loop"
      ],
      correct: 0
    }
  ],

  /* ================= STATE & HOOKS ================= */
  "react-hooks": [
    {
      id: 1,
      q: "What is state in React?",
      a: [
        "Component data",
        "CSS",
        "HTML",
        "API"
      ],
      correct: 0
    },
    {
      id: 2,
      q: "useState is used for?",
      a: [
        "Managing state",
        "Routing",
        "Styling",
        "API calls"
      ],
      correct: 0
    },
    {
      id: 3,
      q: "useEffect is used for?",
      a: [
        "Side effects",
        "State",
        "Loop",
        "Variable"
      ],
      correct: 0
    },
    {
      id: 4,
      q: "Hooks work in?",
      a: [
        "Functional components",
        "Class only",
        "HTML",
        "CSS"
      ],
      correct: 0
    },
    {
      id: 5,
      q: "State updates are?",
      a: [
        "Async",
        "Sync",
        "Loop",
        "None"
      ],
      correct: 0
    },
    {
      id: 6,
      q: "useRef is used for?",
      a: [
        "DOM reference",
        "State",
        "Loop",
        "API"
      ],
      correct: 0
    },
    {
      id: 7,
      q: "useMemo helps?",
      a: [
        "Optimize performance",
        "Routing",
        "State",
        "Loop"
      ],
      correct: 0
    },
    {
      id: 8,
      q: "useCallback returns?",
      a: [
        "Memoized function",
        "State",
        "Object",
        "Array"
      ],
      correct: 0
    },
    {
      id: 9,
      q: "Hook rules?",
      a: [
        "Top-level only",
        "Inside loops",
        "Anywhere",
        "None"
      ],
      correct: 0
    },
    {
      id: 10,
      q: "Custom hooks are?",
      a: [
        "Reusable logic",
        "Components",
        "CSS",
        "Database"
      ],
      correct: 0
    }
  ],

  /* ================= CONTEXT API ================= */
  "react-context": [
    {
      id: 1,
      q: "Context API is used for?",
      a: [
        "Global state",
        "Routing",
        "Styling",
        "Loop"
      ],
      correct: 0
    },
    {
      id: 2,
      q: "createContext does?",
      a: [
        "Creates context",
        "Deletes state",
        "Routing",
        "API"
      ],
      correct: 0
    },
    {
      id: 3,
      q: "Provider is used for?",
      a: [
        "Pass data",
        "Get data",
        "Loop",
        "None"
      ],
      correct: 0
    },
    {
      id: 4,
      q: "useContext is used for?",
      a: [
        "Consume context",
        "Create context",
        "Delete",
        "Loop"
      ],
      correct: 0
    },
    {
      id: 5,
      q: "Context avoids?",
      a: [
        "Prop drilling",
        "State",
        "Hooks",
        "Loop"
      ],
      correct: 0
    },
    {
      id: 6,
      q: "Global state means?",
      a: [
        "Accessible everywhere",
        "Local only",
        "Loop",
        "None"
      ],
      correct: 0
    },
    {
      id: 7,
      q: "Multiple contexts?",
      a: [
        "Allowed",
        "Not allowed",
        "Error",
        "Loop"
      ],
      correct: 0
    },
    {
      id: 8,
      q: "Context works with?",
      a: [
        "Hooks",
        "Loops",
        "Arrays",
        "CSS"
      ],
      correct: 0
    },
    {
      id: 9,
      q: "Context improves?",
      a: [
        "State management",
        "Styling",
        "Database",
        "None"
      ],
      correct: 0
    },
    {
      id: 10,
      q: "Context alternative?",
      a: [
        "Redux",
        "CSS",
        "HTML",
        "Loop"
      ],
      correct: 0
    }
  ],

  /* ================= REACT ROUTER ================= */
  "react-router": [
    {
      id: 1,
      q: "React Router is used for?",
      a: [
        "Navigation",
        "State",
        "CSS",
        "Database"
      ],
      correct: 0
    },
    {
      id: 2,
      q: "Route defines?",
      a: [
        "Path + component",
        "State",
        "Loop",
        "API"
      ],
      correct: 0
    },
    {
      id: 3,
      q: "Link is used for?",
      a: [
        "Navigation",
        "API",
        "State",
        "Loop"
      ],
      correct: 0
    },
    {
      id: 4,
      q: "useNavigate is used for?",
      a: [
        "Programmatic navigation",
        "State",
        "Loop",
        "CSS"
      ],
      correct: 0
    },
    {
      id: 5,
      q: "BrowserRouter wraps?",
      a: [
        "App",
        "Component",
        "Loop",
        "State"
      ],
      correct: 0
    },
    {
      id: 6,
      q: "Dynamic routes use?",
      a: [
        ":id",
        "#id",
        "$id",
        "@id"
      ],
      correct: 0
    },
    {
      id: 7,
      q: "Nested routes?",
      a: [
        "Routes inside routes",
        "Loop",
        "State",
        "None"
      ],
      correct: 0
    },
    {
      id: 8,
      q: "useParams returns?",
      a: [
        "Route params",
        "State",
        "Loop",
        "Array"
      ],
      correct: 0
    },
    {
      id: 9,
      q: "Switch replaced by?",
      a: [
        "Routes",
        "Route",
        "Link",
        "Nav"
      ],
      correct: 0
    },
    {
      id: 10,
      q: "Router improves?",
      a: [
        "Navigation",
        "Performance",
        "CSS",
        "Database"
      ],
      correct: 0
    }
  ],

  /* ================= REDUX TOOLKIT ================= */
  "redux": [
    {
      id: 1,
      q: "Redux is used for?",
      a: [
        "State management",
        "Routing",
        "Styling",
        "Database"
      ],
      correct: 0
    },
    {
      id: 2,
      q: "Store holds?",
      a: [
        "State",
        "Functions",
        "CSS",
        "HTML"
      ],
      correct: 0
    },
    {
      id: 3,
      q: "Action is?",
      a: [
        "Event object",
        "State",
        "Loop",
        "Variable"
      ],
      correct: 0
    },
    {
      id: 4,
      q: "Reducer is?",
      a: [
        "State updater",
        "Loop",
        "Function",
        "API"
      ],
      correct: 0
    },
    {
      id: 5,
      q: "Redux Toolkit simplifies?",
      a: [
        "Redux setup",
        "Routing",
        "CSS",
        "HTML"
      ],
      correct: 0
    },
    {
      id: 6,
      q: "createSlice does?",
      a: [
        "Creates reducer + actions",
        "Delete state",
        "Routing",
        "Loop"
      ],
      correct: 0
    },
    {
      id: 7,
      q: "Dispatch is used for?",
      a: [
        "Send action",
        "Get state",
        "Loop",
        "API"
      ],
      correct: 0
    },
    {
      id: 8,
      q: "useSelector gets?",
      a: [
        "State",
        "Action",
        "Loop",
        "CSS"
      ],
      correct: 0
    },
    {
      id: 9,
      q: "Middleware is?",
      a: [
        "Between dispatch & reducer",
        "Loop",
        "State",
        "CSS"
      ],
      correct: 0
    },
    {
      id: 10,
      q: "Redux advantage?",
      a: [
        "Centralized state",
        "Slow",
        "Complex UI",
        "None"
      ],
      correct: 0
    }
  ],



  /* ================= EXPRESS APIs ================= */
  "express": [
    {
      id: 1,
      q: "What is Express.js?",
      a: [
        "Node.js framework",
        "Database",
        "Frontend library",
        "CSS tool"
      ],
      correct: 0
    },
    {
      id: 2,
      q: "Express is used for?",
      a: [
        "Building APIs",
        "Styling",
        "Machine learning",
        "Database"
      ],
      correct: 0
    },
    {
      id: 3,
      q: "Which method handles GET request?",
      a: ["app.get()", "app.post()", "app.put()", "app.delete()"],
      correct: 0
    },
    {
      id: 4,
      q: "Middleware is?",
      a: [
        "Function in request cycle",
        "Database",
        "Loop",
        "Variable"
      ],
      correct: 0
    },
    {
      id: 5,
      q: "app.listen() is used for?",
      a: [
        "Start server",
        "Stop server",
        "Database",
        "Routing"
      ],
      correct: 0
    },
    {
      id: 6,
      q: "req object contains?",
      a: [
        "Request data",
        "Response data",
        "CSS",
        "HTML"
      ],
      correct: 0
    },
    {
      id: 7,
      q: "res.send() does?",
      a: [
        "Send response",
        "Receive request",
        "Loop",
        "None"
      ],
      correct: 0
    },
    {
      id: 8,
      q: "Routing means?",
      a: [
        "Handle endpoints",
        "Database",
        "Loop",
        "CSS"
      ],
      correct: 0
    },
    {
      id: 9,
      q: "JSON middleware is?",
      a: [
        "express.json()",
        "json.parse()",
        "app.json()",
        "parse.json()"
      ],
      correct: 0
    },
    {
      id: 10,
      q: "Express improves?",
      a: [
        "Backend development speed",
        "CSS",
        "UI",
        "None"
      ],
      correct: 0
    }
  ],

  /* ================= MONGODB & MONGOOSE ================= */
  "mongodb": [
    {
      id: 1,
      q: "MongoDB is?",
      a: [
        "NoSQL database",
        "SQL database",
        "Framework",
        "Library"
      ],
      correct: 0
    },
    {
      id: 2,
      q: "Data in MongoDB is stored as?",
      a: [
        "Documents",
        "Tables",
        "Rows",
        "Columns"
      ],
      correct: 0
    },
    {
      id: 3,
      q: "Collection is?",
      a: [
        "Group of documents",
        "Row",
        "Table",
        "Loop"
      ],
      correct: 0
    },
    {
      id: 4,
      q: "Mongoose is?",
      a: [
        "ODM library",
        "Database",
        "Framework",
        "Loop"
      ],
      correct: 0
    },
    {
      id: 5,
      q: "Schema defines?",
      a: [
        "Structure of document",
        "Loop",
        "CSS",
        "HTML"
      ],
      correct: 0
    },
    {
      id: 6,
      q: "Model is?",
      a: [
        "Wrapper of schema",
        "Loop",
        "Array",
        "Function"
      ],
      correct: 0
    },
    {
      id: 7,
      q: "Insert document uses?",
      a: [
        "create()",
        "insertRow()",
        "add()",
        "push()"
      ],
      correct: 0
    },
    {
      id: 8,
      q: "find() does?",
      a: [
        "Retrieve data",
        "Delete data",
        "Update",
        "Loop"
      ],
      correct: 0
    },
    {
      id: 9,
      q: "updateOne() is for?",
      a: [
        "Update document",
        "Delete",
        "Insert",
        "Loop"
      ],
      correct: 0
    },
    {
      id: 10,
      q: "MongoDB is best for?",
      a: [
        "Flexible data",
        "Fixed schema",
        "CSS",
        "HTML"
      ],
      correct: 0
    }
  ],

  /* ================= SEQUELIZE ORM ================= */
  "sequelize": [
    {
      id: 1,
      q: "Sequelize is?",
      a: [
        "ORM for SQL",
        "NoSQL DB",
        "Framework",
        "Library"
      ],
      correct: 0
    },
    {
      id: 2,
      q: "ORM means?",
      a: [
        "Object Relational Mapping",
        "Object Routing Method",
        "Operation Resource Model",
        "None"
      ],
      correct: 0
    },
    {
      id: 3,
      q: "Sequelize supports?",
      a: [
        "MySQL, PostgreSQL",
        "Only MongoDB",
        "Only SQLite",
        "None"
      ],
      correct: 0
    },
    {
      id: 4,
      q: "Model in Sequelize?",
      a: [
        "Table representation",
        "Loop",
        "Variable",
        "API"
      ],
      correct: 0
    },
    {
      id: 5,
      q: "sync() does?",
      a: [
        "Create tables",
        "Delete tables",
        "Loop",
        "None"
      ],
      correct: 0
    },
    {
      id: 6,
      q: "findAll() does?",
      a: [
        "Get records",
        "Insert",
        "Delete",
        "Loop"
      ],
      correct: 0
    },
    {
      id: 7,
      q: "create() does?",
      a: [
        "Insert record",
        "Delete",
        "Update",
        "Loop"
      ],
      correct: 0
    },
    {
      id: 8,
      q: "Associations are?",
      a: [
        "Relationships",
        "Loops",
        "Variables",
        "CSS"
      ],
      correct: 0
    },
    {
      id: 9,
      q: "belongsTo is?",
      a: [
        "Association type",
        "Loop",
        "Function",
        "None"
      ],
      correct: 0
    },
    {
      id: 10,
      q: "Sequelize advantage?",
      a: [
        "Simplifies SQL",
        "Slower",
        "Complex",
        "None"
      ],
      correct: 0
    }
  ],

  /* ================= JWT AUTH ================= */
  "jwt": [
    {
      id: 1,
      q: "JWT stands for?",
      a: [
        "JSON Web Token",
        "Java Web Token",
        "JSON With Token",
        "None"
      ],
      correct: 0
    },
    {
      id: 2,
      q: "JWT is used for?",
      a: [
        "Authentication",
        "Styling",
        "Database",
        "Routing"
      ],
      correct: 0
    },
    {
      id: 3,
      q: "JWT contains?",
      a: [
        "Header, Payload, Signature",
        "Body only",
        "Header only",
        "None"
      ],
      correct: 0
    },
    {
      id: 4,
      q: "Payload stores?",
      a: [
        "User data",
        "CSS",
        "HTML",
        "Loop"
      ],
      correct: 0
    },
    {
      id: 5,
      q: "Signature ensures?",
      a: [
        "Security",
        "Speed",
        "UI",
        "None"
      ],
      correct: 0
    },
    {
      id: 6,
      q: "jsonwebtoken library is used for?",
      a: [
        "Create/verify tokens",
        "Routing",
        "Loop",
        "Database"
      ],
      correct: 0
    },
    {
      id: 7,
      q: "Token stored in?",
      a: [
        "LocalStorage/Cookies",
        "CSS",
        "HTML",
        "Loop"
      ],
      correct: 0
    },
    {
      id: 8,
      q: "verify() does?",
      a: [
        "Validate token",
        "Create token",
        "Delete",
        "Loop"
      ],
      correct: 0
    },
    {
      id: 9,
      q: "JWT is?",
      a: [
        "Stateless",
        "Stateful",
        "Loop",
        "None"
      ],
      correct: 0
    },
    {
      id: 10,
      q: "JWT improves?",
      a: [
        "Secure authentication",
        "CSS",
        "UI",
        "None"
      ],
      correct: 0
    }
  ]

,

  /* ================= SQL ================= */

  "sql-select": [
    {
      id: 1,
      q: "Which SQL statement is used to retrieve data from a database?",
      a: ["GET", "SELECT", "FETCH", "RETRIEVE"],
      correct: 1
    },
    {
      id: 2,
      q: "Which clause is used to filter records?",
      a: ["ORDER BY", "WHERE", "GROUP BY", "FILTER"],
      correct: 1
    },
    {
      id: 3,
      q: "Which JOIN returns only matching records?",
      a: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"],
      correct: 2
    },
    {
      id: 4,
      q: "Which clause sorts the result?",
      a: ["ORDER BY", "SORT", "GROUP BY", "ARRANGE"],
      correct: 0
    },
    {
      id: 5,
      q: "Which JOIN returns all records from left table?",
      a: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"],
      correct: 0
    },
    {
      id: 6,
      q: "Which operator is used for pattern matching?",
      a: ["MATCH", "LIKE", "REGEX", "PATTERN"],
      correct: 1
    },
    {
      id: 7,
      q: "Which keyword removes duplicate records?",
      a: ["UNIQUE", "DISTINCT", "REMOVE", "FILTER"],
      correct: 1
    },
    {
      id: 8,
      q: "Which clause groups rows?",
      a: ["GROUP BY", "ORDER BY", "WHERE", "JOIN"],
      correct: 0
    },
    {
      id: 9,
      q: "Which JOIN returns all records from both tables?",
      a: ["INNER", "LEFT", "FULL OUTER", "RIGHT"],
      correct: 2
    },
    {
      id: 10,
      q: "Which keyword limits number of rows?",
      a: ["LIMIT", "TOP", "ROWNUM", "All of the above"],
      correct: 3
    }
  ],

  "sql-agg": [
    {
      id: 1,
      q: "Which function returns total number of rows?",
      a: ["COUNT()", "SUM()", "AVG()", "TOTAL()"],
      correct: 0
    },
    {
      id: 2,
      q: "Which function returns average value?",
      a: ["SUM()", "AVG()", "COUNT()", "MEAN()"],
      correct: 1
    },
    {
      id: 3,
      q: "Which function returns highest value?",
      a: ["MAX()", "TOP()", "HIGH()", "GREATEST()"],
      correct: 0
    },
    {
      id: 4,
      q: "Which function returns lowest value?",
      a: ["MIN()", "LOW()", "LEAST()", "BOTTOM()"],
      correct: 0
    },
    {
      id: 5,
      q: "Which clause is used with aggregate functions?",
      a: ["GROUP BY", "ORDER BY", "WHERE", "JOIN"],
      correct: 0
    },
    {
      id: 6,
      q: "Which clause filters aggregated results?",
      a: ["WHERE", "HAVING", "GROUP", "FILTER"],
      correct: 1
    },
    {
      id: 7,
      q: "SUM() is used for?",
      a: ["Counting", "Adding values", "Averaging", "Sorting"],
      correct: 1
    },
    {
      id: 8,
      q: "COUNT(*) counts?",
      a: ["Rows", "Columns", "Tables", "Indexes"],
      correct: 0
    },
    {
      id: 9,
      q: "GROUP BY works with?",
      a: ["Aggregate functions", "JOIN", "UPDATE", "DELETE"],
      correct: 0
    },
    {
      id: 10,
      q: "HAVING is used after?",
      a: ["SELECT", "GROUP BY", "WHERE", "ORDER BY"],
      correct: 1
    }
  ],

  "sql-normalization": [
    {
      id: 1,
      q: "What is normalization?",
      a: ["Data duplication", "Organizing data", "Deleting data", "Sorting data"],
      correct: 1
    },
    {
      id: 2,
      q: "1NF eliminates?",
      a: ["Duplicate rows", "Repeating groups", "Keys", "Indexes"],
      correct: 1
    },
    {
      id: 3,
      q: "2NF removes?",
      a: ["Partial dependency", "Full dependency", "Keys", "Indexes"],
      correct: 0
    },
    {
      id: 4,
      q: "3NF removes?",
      a: ["Transitive dependency", "Primary key", "Index", "Table"],
      correct: 0
    },
    {
      id: 5,
      q: "Normalization reduces?",
      a: ["Redundancy", "Speed", "Security", "Tables"],
      correct: 0
    },
    {
      id: 6,
      q: "Primary key is?",
      a: ["Unique identifier", "Duplicate value", "Null", "Index"],
      correct: 0
    },
    {
      id: 7,
      q: "Foreign key is?",
      a: ["Reference key", "Primary key", "Index", "Constraint"],
      correct: 0
    },
    {
      id: 8,
      q: "Normalization improves?",
      a: ["Data integrity", "Redundancy", "Errors", "Duplicates"],
      correct: 0
    },
    {
      id: 9,
      q: "Denormalization increases?",
      a: ["Redundancy", "Integrity", "Consistency", "Keys"],
      correct: 0
    },
    {
      id: 10,
      q: "Which normal form removes transitive dependency?",
      a: ["1NF", "2NF", "3NF", "BCNF"],
      correct: 2
    }
  ],

  "sql-indexing": [
    {
      id: 1,
      q: "What is indexing?",
      a: ["Speeding up queries", "Deleting data", "Sorting rows", "Grouping"],
      correct: 0
    },
    {
      id: 2,
      q: "Index improves?",
      a: ["Read speed", "Write speed", "Delete speed", "Insert only"],
      correct: 0
    },
    {
      id: 3,
      q: "Primary key has?",
      a: ["Index", "No index", "Duplicate", "Null"],
      correct: 0
    },
    {
      id: 4,
      q: "Clustered index stores?",
      a: ["Actual data", "Pointers", "Keys", "Null"],
      correct: 0
    },
    {
      id: 5,
      q: "Non-clustered index stores?",
      a: ["Pointers", "Data", "Rows", "Columns"],
      correct: 0
    },
    {
      id: 6,
      q: "Too many indexes cause?",
      a: ["Slow writes", "Fast writes", "No change", "Crash"],
      correct: 0
    },
    {
      id: 7,
      q: "Index is useful for?",
      a: ["Search", "Insert", "Delete", "Drop"],
      correct: 0
    },
    {
      id: 8,
      q: "CREATE INDEX is used to?",
      a: ["Create index", "Delete index", "Update index", "Sort index"],
      correct: 0
    },
    {
      id: 9,
      q: "DROP INDEX is used to?",
      a: ["Remove index", "Add index", "Update index", "Sort index"],
      correct: 0
    },
    {
      id: 10,
      q: "Index works best on?",
      a: ["Large tables", "Small tables", "Empty tables", "Temp tables"],
      correct: 0
    }
  ]

,

  /* ================= DEVOPS ================= */

  "docker": [
    {
      id: 1,
      q: "What is Docker?",
      a: ["Virtual machine", "Container platform", "Database", "OS"],
      correct: 1
    },
    {
      id: 2,
      q: "Docker containers are?",
      a: ["Heavyweight", "Lightweight", "Slow", "Virtual machines"],
      correct: 1
    },
    {
      id: 3,
      q: "Docker image is?",
      a: ["Running container", "Blueprint of container", "Database", "Script"],
      correct: 1
    },
    {
      id: 4,
      q: "Command to run container?",
      a: ["docker start", "docker run", "docker exec", "docker build"],
      correct: 1
    },
    {
      id: 5,
      q: "Dockerfile is used for?",
      a: ["Running app", "Building image", "Deleting container", "Networking"],
      correct: 1
    },
    {
      id: 6,
      q: "Which command lists containers?",
      a: ["docker list", "docker ps", "docker show", "docker containers"],
      correct: 1
    },
    {
      id: 7,
      q: "Docker Hub is?",
      a: ["Cloud storage", "Image registry", "Database", "Container"],
      correct: 1
    },
    {
      id: 8,
      q: "Port mapping is done using?",
      a: ["-p", "-m", "-d", "-i"],
      correct: 0
    },
    {
      id: 9,
      q: "docker build is used to?",
      a: ["Run container", "Build image", "Delete image", "Stop container"],
      correct: 1
    },
    {
      id: 10,
      q: "Containers share?",
      a: ["Kernel", "OS", "CPU", "RAM"],
      correct: 0
    }
  ],

  "github-actions": [
    {
      id: 1,
      q: "GitHub Actions is used for?",
      a: ["Hosting", "CI/CD", "Database", "Security"],
      correct: 1
    },
    {
      id: 2,
      q: "Workflow file extension?",
      a: [".json", ".yaml", ".txt", ".js"],
      correct: 1
    },
    {
      id: 3,
      q: "Workflows are stored in?",
      a: [".github/workflows", "/actions", "/ci", "/pipelines"],
      correct: 0
    },
    {
      id: 4,
      q: "Trigger event example?",
      a: ["push", "commit", "merge", "pull"],
      correct: 0
    },
    {
      id: 5,
      q: "Runner is?",
      a: ["Server", "Script", "Container", "Workflow"],
      correct: 0
    },
    {
      id: 6,
      q: "jobs define?",
      a: ["Steps", "Tasks", "Containers", "Servers"],
      correct: 1
    },
    {
      id: 7,
      q: "steps define?",
      a: ["Commands", "Jobs", "Triggers", "Events"],
      correct: 0
    },
    {
      id: 8,
      q: "uses keyword is for?",
      a: ["Action reuse", "Variable", "Loop", "Import"],
      correct: 0
    },
    {
      id: 9,
      q: "CI stands for?",
      a: ["Continuous Integration", "Code Integration", "Container Integration", "Cloud Integration"],
      correct: 0
    },
    {
      id: 10,
      q: "CD stands for?",
      a: ["Continuous Deployment", "Code Delivery", "Cloud Deployment", "Container Delivery"],
      correct: 0
    }
  ],

  "jenkins": [
    {
      id: 1,
      q: "Jenkins is?",
      a: ["CI/CD tool", "Database", "Language", "OS"],
      correct: 0
    },
    {
      id: 2,
      q: "Jenkins uses?",
      a: ["Pipelines", "Tables", "Functions", "Classes"],
      correct: 0
    },
    {
      id: 3,
      q: "Jenkinsfile is?",
      a: ["Config file", "Pipeline definition", "Script", "All"],
      correct: 3
    },
    {
      id: 4,
      q: "Freestyle project is?",
      a: ["Simple job", "Complex job", "Script", "Pipeline"],
      correct: 0
    },
    {
      id: 5,
      q: "Pipeline as code uses?",
      a: ["Groovy", "Python", "Java", "C++"],
      correct: 0
    },
    {
      id: 6,
      q: "Jenkins runs on?",
      a: ["Java", "Python", "Node", "C"],
      correct: 0
    },
    {
      id: 7,
      q: "Plugins are used for?",
      a: ["Extending features", "Deleting jobs", "Stopping builds", "Running DB"],
      correct: 0
    },
    {
      id: 8,
      q: "Build trigger example?",
      a: ["Git push", "Manual", "Schedule", "All"],
      correct: 3
    },
    {
      id: 9,
      q: "Blue Ocean is?",
      a: ["UI for Jenkins", "Plugin", "Theme", "Script"],
      correct: 0
    },
    {
      id: 10,
      q: "Jenkins supports?",
      a: ["Automation", "Testing", "Deployment", "All"],
      correct: 3
    }
  ]
,

  /* ================= SECURITY ================= */

  "owasp": [
    {
      id: 1,
      q: "What is OWASP?",
      a: ["Security organization", "Database", "Programming language", "Protocol"],
      correct: 0
    },
    {
      id: 2,
      q: "OWASP Top 10 represents?",
      a: ["Top hackers", "Top vulnerabilities", "Top tools", "Top companies"],
      correct: 1
    },
    {
      id: 3,
      q: "Injection is?",
      a: ["UI attack", "Code injection vulnerability", "Network attack", "Hardware attack"],
      correct: 1
    },
    {
      id: 4,
      q: "Broken authentication leads to?",
      a: ["Login issues", "Unauthorized access", "Slow server", "Crash"],
      correct: 1
    },
    {
      id: 5,
      q: "Sensitive data exposure means?",
      a: ["Data encryption", "Data leak", "Data storage", "Data deletion"],
      correct: 1
    },
    {
      id: 6,
      q: "Security misconfiguration refers to?",
      a: ["Wrong settings", "Wrong code", "Wrong data", "Wrong UI"],
      correct: 0
    },
    {
      id: 7,
      q: "Cross-Site Scripting is?",
      a: ["XSS", "SQL", "CSRF", "DOS"],
      correct: 0
    },
    {
      id: 8,
      q: "Broken access control allows?",
      a: ["Unauthorized access", "Slow performance", "UI bugs", "Data backup"],
      correct: 0
    },
    {
      id: 9,
      q: "OWASP focuses on?",
      a: ["Web security", "Hardware", "Networking", "Databases"],
      correct: 0
    },
    {
      id: 10,
      q: "CSRF stands for?",
      a: ["Cross-Site Request Forgery", "Client Server Request Format", "Cross System Request Flow", "Code Security Risk Factor"],
      correct: 0
    }
  ],

  "xss-sql": [
    {
      id: 1,
      q: "XSS stands for?",
      a: ["Cross-Site Scripting", "Cross Server Script", "Extra Secure Script", "Execute Script System"],
      correct: 0
    },
    {
      id: 2,
      q: "SQL Injection targets?",
      a: ["Frontend", "Database", "Network", "OS"],
      correct: 1
    },
    {
      id: 3,
      q: "XSS allows attacker to?",
      a: ["Run scripts in browser", "Access DB", "Crash server", "Delete files"],
      correct: 0
    },
    {
      id: 4,
      q: "SQL Injection occurs when?",
      a: ["Input not sanitized", "Server slow", "UI broken", "Network fails"],
      correct: 0
    },
    {
      id: 5,
      q: "Prepared statements prevent?",
      a: ["XSS", "SQL Injection", "CSRF", "DOS"],
      correct: 1
    },
    {
      id: 6,
      q: "Reflected XSS is?",
      a: ["Stored attack", "Immediate response attack", "Database attack", "Network attack"],
      correct: 1
    },
    {
      id: 7,
      q: "Stored XSS is?",
      a: ["Temporary", "Saved in database", "Client only", "Server only"],
      correct: 1
    },
    {
      id: 8,
      q: "Best protection for XSS?",
      a: ["Input validation", "Encryption", "Firewall", "Indexing"],
      correct: 0
    },
    {
      id: 9,
      q: "SQL Injection can?",
      a: ["Read data", "Modify data", "Delete data", "All"],
      correct: 3
    },
    {
      id: 10,
      q: "Escaping input prevents?",
      a: ["Injection", "Crash", "Delay", "Timeout"],
      correct: 0
    }
  ],

  "firewalls": [
    {
      id: 1,
      q: "Firewall is used for?",
      a: ["Security", "Storage", "Processing", "Networking"],
      correct: 0
    },
    {
      id: 2,
      q: "Firewall filters?",
      a: ["Traffic", "Files", "Users", "Apps"],
      correct: 0
    },
    {
      id: 3,
      q: "VPN stands for?",
      a: ["Virtual Private Network", "Very Private Network", "Virtual Public Network", "Verified Private Network"],
      correct: 0
    },
    {
      id: 4,
      q: "VPN provides?",
      a: ["Encryption", "Storage", "Speed", "Indexing"],
      correct: 0
    },
    {
      id: 5,
      q: "Firewall types include?",
      a: ["Hardware", "Software", "Both", "None"],
      correct: 2
    },
    {
      id: 6,
      q: "Packet filtering firewall works on?",
      a: ["Headers", "Content", "Apps", "UI"],
      correct: 0
    },
    {
      id: 7,
      q: "Stateful firewall tracks?",
      a: ["Connections", "Files", "Users", "Apps"],
      correct: 0
    },
    {
      id: 8,
      q: "VPN hides?",
      a: ["IP address", "Password", "Files", "Apps"],
      correct: 0
    },
    {
      id: 9,
      q: "Firewall blocks?",
      a: ["Unauthorized access", "Authorized users", "Apps", "Data"],
      correct: 0
    },
    {
      id: 10,
      q: "VPN is used for?",
      a: ["Secure connection", "Faster internet", "Storage", "Processing"],
      correct: 0
    }
  ]


,

  /* ================= MACHINE LEARNING ================= */

  "logistic": [
    {
      id: 1,
      q: "Logistic Regression is used for?",
      a: ["Regression", "Classification", "Clustering", "Sorting"],
      correct: 1
    },
    {
      id: 2,
      q: "Output of logistic regression is?",
      a: ["Number", "Probability", "String", "Graph"],
      correct: 1
    },
    {
      id: 3,
      q: "Which function is used?",
      a: ["Linear", "Sigmoid", "ReLU", "Tanh"],
      correct: 1
    },
    {
      id: 4,
      q: "Sigmoid output range?",
      a: ["0 to 1", "-1 to 1", "0 to 100", "-∞ to ∞"],
      correct: 0
    },
    {
      id: 5,
      q: "Logistic regression is supervised?",
      a: ["Yes", "No", "Sometimes", "Unknown"],
      correct: 0
    },
    {
      id: 6,
      q: "Used for binary classification?",
      a: ["Yes", "No", "Only multi-class", "Only regression"],
      correct: 0
    },
    {
      id: 7,
      q: "Decision boundary is?",
      a: ["Line/curve separating classes", "Graph", "Table", "Cluster"],
      correct: 0
    },
    {
      id: 8,
      q: "Loss function used?",
      a: ["MSE", "Log Loss", "MAE", "RMSE"],
      correct: 1
    },
    {
      id: 9,
      q: "Overfitting means?",
      a: ["Good model", "Too complex model", "Simple model", "No model"],
      correct: 1
    },
    {
      id: 10,
      q: "Threshold value commonly used?",
      a: ["0.5", "1", "0", "10"],
      correct: 0
    }
  ],

  "kmeans": [
    {
      id: 1,
      q: "K-Means is used for?",
      a: ["Classification", "Clustering", "Regression", "Sorting"],
      correct: 1
    },
    {
      id: 2,
      q: "K represents?",
      a: ["Clusters", "Classes", "Features", "Rows"],
      correct: 0
    },
    {
      id: 3,
      q: "K-Means is?",
      a: ["Supervised", "Unsupervised", "Semi-supervised", "Reinforcement"],
      correct: 1
    },
    {
      id: 4,
      q: "Algorithm starts with?",
      a: ["Random centroids", "Sorted data", "Labels", "Graph"],
      correct: 0
    },
    {
      id: 5,
      q: "Centroid is?",
      a: ["Center of cluster", "Edge", "Data point", "Label"],
      correct: 0
    },
    {
      id: 6,
      q: "Distance metric used?",
      a: ["Euclidean", "Binary", "Text", "Random"],
      correct: 0
    },
    {
      id: 7,
      q: "Algorithm stops when?",
      a: ["Centroids stable", "Data ends", "Time ends", "Memory full"],
      correct: 0
    },
    {
      id: 8,
      q: "K-Means minimizes?",
      a: ["Distance", "Accuracy", "Loss", "Error"],
      correct: 0
    },
    {
      id: 9,
      q: "Choosing K is done using?",
      a: ["Elbow method", "Tree", "Graph", "Loop"],
      correct: 0
    },
    {
      id: 10,
      q: "K-Means sensitive to?",
      a: ["Initial centroids", "Labels", "Sorting", "Indexes"],
      correct: 0
    }
  ]

,

  /* ================= DATA STRUCTURES ================= */

  "linkedlist": [
    {
      id: 1,
      q: "What is a Linked List?",
      a: ["Array", "Linear data structure with nodes", "Tree", "Graph"],
      correct: 1
    },
    {
      id: 2,
      q: "Each node contains?",
      a: ["Data only", "Pointer only", "Data + pointer", "Index"],
      correct: 2
    },
    {
      id: 3,
      q: "First node is called?",
      a: ["Tail", "Head", "Root", "Start"],
      correct: 1
    },
    {
      id: 4,
      q: "Last node points to?",
      a: ["Head", "Null", "Next", "Previous"],
      correct: 1
    },
    {
      id: 5,
      q: "Insertion is?",
      a: ["Fast", "Slow", "Impossible", "Constant"],
      correct: 0
    },
    {
      id: 6,
      q: "Traversal requires?",
      a: ["Loop", "Recursion", "Pointer movement", "All"],
      correct: 3
    },
    {
      id: 7,
      q: "Doubly linked list has?",
      a: ["One pointer", "Two pointers", "Three pointers", "None"],
      correct: 1
    },
    {
      id: 8,
      q: "Circular linked list connects?",
      a: ["Tail to head", "Head to null", "Tail to null", "None"],
      correct: 0
    },
    {
      id: 9,
      q: "Searching is?",
      a: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      correct: 1
    },
    {
      id: 10,
      q: "Linked list uses?",
      a: ["Dynamic memory", "Static memory", "Stack", "Queue"],
      correct: 0
    }
  ],

  "stack-queue": [
    {
      id: 1,
      q: "Stack follows?",
      a: ["FIFO", "LIFO", "Random", "Priority"],
      correct: 1
    },
    {
      id: 2,
      q: "Queue follows?",
      a: ["LIFO", "FIFO", "Random", "Stack"],
      correct: 1
    },
    {
      id: 3,
      q: "Push operation is?",
      a: ["Insert", "Delete", "Search", "Sort"],
      correct: 0
    },
    {
      id: 4,
      q: "Pop operation is?",
      a: ["Insert", "Delete", "Search", "Sort"],
      correct: 1
    },
    {
      id: 5,
      q: "Peek operation returns?",
      a: ["Top element", "Bottom element", "Middle", "All"],
      correct: 0
    },
    {
      id: 6,
      q: "Queue insertion is called?",
      a: ["Push", "Enqueue", "Insert", "Add"],
      correct: 1
    },
    {
      id: 7,
      q: "Queue deletion is called?",
      a: ["Pop", "Remove", "Dequeue", "Delete"],
      correct: 2
    },
    {
      id: 8,
      q: "Stack overflow occurs when?",
      a: ["Full", "Empty", "Half", "Sorted"],
      correct: 0
    },
    {
      id: 9,
      q: "Queue underflow occurs when?",
      a: ["Empty", "Full", "Sorted", "Half"],
      correct: 0
    },
    {
      id: 10,
      q: "Stack can be implemented using?",
      a: ["Array", "Linked List", "Both", "None"],
      correct: 2
    }
  ],

  "trees": [
    {
      id: 1,
      q: "Tree is?",
      a: ["Linear", "Hierarchical", "Random", "Circular"],
      correct: 1
    },
    {
      id: 2,
      q: "Root node is?",
      a: ["Top node", "Bottom node", "Leaf", "Child"],
      correct: 0
    },
    {
      id: 3,
      q: "Leaf node has?",
      a: ["Children", "No children", "Two children", "Parent"],
      correct: 1
    },
    {
      id: 4,
      q: "Binary tree has?",
      a: ["2 children max", "3 children", "Unlimited", "None"],
      correct: 0
    },
    {
      id: 5,
      q: "Traversal types?",
      a: ["Inorder", "Preorder", "Postorder", "All"],
      correct: 3
    },
    {
      id: 6,
      q: "BST property?",
      a: ["Left < Root < Right", "Left > Root", "Right < Root", "None"],
      correct: 0
    },
    {
      id: 7,
      q: "Height of tree?",
      a: ["Levels", "Nodes", "Edges", "Leaves"],
      correct: 0
    },
    {
      id: 8,
      q: "Balanced tree improves?",
      a: ["Search time", "Memory", "Storage", "Speed"],
      correct: 0
    },
    {
      id: 9,
      q: "DFS includes?",
      a: ["Preorder", "Inorder", "Postorder", "All"],
      correct: 3
    },
    {
      id: 10,
      q: "BFS uses?",
      a: ["Queue", "Stack", "Array", "List"],
      correct: 0
    }
  ],

  "graphs": [
    {
      id: 1,
      q: "Graph consists of?",
      a: ["Nodes & edges", "Trees", "Arrays", "Stacks"],
      correct: 0
    },
    {
      id: 2,
      q: "Vertex means?",
      a: ["Node", "Edge", "Weight", "Path"],
      correct: 0
    },
    {
      id: 3,
      q: "Edge represents?",
      a: ["Connection", "Node", "Weight", "Loop"],
      correct: 0
    },
    {
      id: 4,
      q: "Directed graph has?",
      a: ["Direction", "No direction", "Cycle", "Tree"],
      correct: 0
    },
    {
      id: 5,
      q: "Undirected graph has?",
      a: ["No direction", "Direction", "Cycle", "Tree"],
      correct: 0
    },
    {
      id: 6,
      q: "DFS uses?",
      a: ["Stack", "Queue", "Array", "List"],
      correct: 0
    },
    {
      id: 7,
      q: "BFS uses?",
      a: ["Queue", "Stack", "Array", "List"],
      correct: 0
    },
    {
      id: 8,
      q: "Graph traversal means?",
      a: ["Visit nodes", "Delete nodes", "Sort nodes", "Insert nodes"],
      correct: 0
    },
    {
      id: 9,
      q: "Cycle means?",
      a: ["Loop in graph", "Tree", "List", "Stack"],
      correct: 0
    },
    {
      id: 10,
      q: "Weighted graph has?",
      a: ["Weights on edges", "Nodes only", "Trees", "Lists"],
      correct: 0
    }
  ]

};


















/**
 * Flashcards for each topic.
 * Keyed by topic ID.
 */
/* =========================
   FLASHCARDS (ALL TOPICS)
========================= */

export const flashcards = {

  /* ================= PYTHON ================= */
  "py-files": [
    { front: "What is a file in Python?", back: "A file is a storage to save data permanently." },
    { front: "Which function opens a file?", back: "open()" },
    { front: "Modes of file opening?", back: "r, w, a, rb, wb" },
    { front: "What is write mode?", back: "Creates/overwrites file." },
    { front: "What is append mode?", back: "Adds data to file." }
  ],

  "py-loops": [
    { front: "What is a loop?", back: "Repeats a block of code." },
    { front: "Types of loops?", back: "for loop, while loop" },
    { front: "What is break?", back: "Stops loop execution." },
    { front: "What is continue?", back: "Skips current iteration." },
    { front: "Range function?", back: "Generates sequence of numbers." }
  ],

  "py-functions": [
    { front: "What is a function?", back: "Reusable block of code." },
    { front: "Define function keyword?", back: "def" },
    { front: "What is return?", back: "Sends value back." },
    { front: "Arguments?", back: "Inputs to functions." },
    { front: "Lambda?", back: "Anonymous function." }
  ],

  /* ================= WEB ================= */
  "html5": [
    { front: "What is HTML?", back: "Markup language for web." },
    { front: "HTML stands for?", back: "HyperText Markup Language" },
    { front: "Semantic tags?", back: "header, section, article" },
    { front: "Form tag?", back: "<form>" },
    { front: "Media tags?", back: "<audio>, <video>" }
  ],

  "css": [
    { front: "What is CSS?", back: "Styling language." },
    { front: "Box model?", back: "margin, border, padding" },
    { front: "Display types?", back: "block, inline, flex" },
    { front: "Position types?", back: "absolute, relative" },
    { front: "Flexbox?", back: "Layout system." }
  ],

  "css-grid": [
    { front: "What is CSS Grid?", back: "2D layout system." },
    { front: "Grid container?", back: "Parent element." },
    { front: "Grid item?", back: "Child elements." },
    { front: "grid-template?", back: "Defines structure." },
    { front: "gap?", back: "Spacing between items." }
  ],

  "responsive": [
    { front: "Responsive design?", back: "Adapts to screen size." },
    { front: "Media query?", back: "@media rule." },
    { front: "Mobile-first?", back: "Design for mobile first." },
    { front: "Viewport?", back: "Visible area." },
    { front: "Flexbox helps?", back: "Responsive layouts." }
  ],

  "sass": [
    { front: "What is SASS?", back: "CSS preprocessor." },
    { front: "Variables?", back: "$color" },
    { front: "Nesting?", back: "Nested CSS rules." },
    { front: "Mixins?", back: "Reusable styles." },
    { front: "Functions?", back: "Custom logic in CSS." }
  ],

  /* ================= JAVASCRIPT ================= */
  "js-functions": [
    { front: "Function?", back: "Reusable code block." },
    { front: "Scope?", back: "Variable accessibility." },
    { front: "Closure?", back: "Function with memory." },
    { front: "Arrow function?", back: "=> syntax." },
    { front: "Hoisting?", back: "Moves declarations up." }
  ],

  "js-prototypes": [
    { front: "Prototype?", back: "Object inheritance." },
    { front: "Class?", back: "Blueprint for objects." },
    { front: "this keyword?", back: "Refers to object." },
    { front: "Inheritance?", back: "Reuse properties." },
    { front: "Constructor?", back: "Initializes object." }
  ],

  "js-es6": [
    { front: "ES6?", back: "Modern JS version." },
    { front: "let vs var?", back: "Block vs function scope." },
    { front: "const?", back: "Immutable variable." },
    { front: "Import/export?", back: "Modules." },
    { front: "Template literals?", back: "`string`" }
  ],

  "js-performance": [
    { front: "Debouncing?", back: "Limit calls." },
    { front: "Throttling?", back: "Control frequency." },
    { front: "Lazy loading?", back: "Load when needed." },
    { front: "Memory leaks?", back: "Unused memory usage." },
    { front: "Optimization?", back: "Improve speed." }
  ],

  /* ================= REACT ================= */
  "react-props": [
    { front: "Props?", back: "Component inputs." },
    { front: "Reusable components?", back: "Yes." },
    { front: "Functional component?", back: "JS function." },
    { front: "JSX?", back: "HTML in JS." },
    { front: "Props are?", back: "Read-only." }
  ],

  "react-hooks": [
    { front: "useState?", back: "State hook." },
    { front: "useEffect?", back: "Side effects." },
    { front: "Hooks rules?", back: "Top-level only." },
    { front: "Custom hooks?", back: "Reusable logic." },
    { front: "State update?", back: "Triggers re-render." }
  ],

  "react-context": [
    { front: "Context API?", back: "Global state." },
    { front: "Provider?", back: "Shares data." },
    { front: "Consumer?", back: "Uses data." },
    { front: "useContext?", back: "Hook to access." },
    { front: "Avoid?", back: "Prop drilling." }
  ],

  "react-router": [
    { front: "Routing?", back: "Navigation." },
    { front: "Route?", back: "Path mapping." },
    { front: "Link?", back: "Navigation element." },
    { front: "useParams?", back: "Get params." },
    { front: "SPA?", back: "Single Page App." }
  ],

  "redux": [
    { front: "Redux?", back: "State management." },
    { front: "Store?", back: "Holds state." },
    { front: "Reducer?", back: "Updates state." },
    { front: "Action?", back: "Trigger change." },
    { front: "Dispatch?", back: "Send action." }
  ],

  /* ================= BACKEND ================= */
  "express": [
    { front: "Express?", back: "Node framework." },
    { front: "Middleware?", back: "Runs before request." },
    { front: "Route?", back: "API endpoint." },
    { front: "req/res?", back: "Request/Response." },
    { front: "JSON?", back: "Data format." }
  ],

  "mongodb": [
    { front: "MongoDB?", back: "NoSQL DB." },
    { front: "Collection?", back: "Group of docs." },
    { front: "Document?", back: "JSON object." },
    { front: "Mongoose?", back: "ODM tool." },
    { front: "Schema?", back: "Structure." }
  ],

  "sequelize": [
    { front: "Sequelize?", back: "ORM." },
    { front: "Model?", back: "Table mapping." },
    { front: "Sync?", back: "Create tables." },
    { front: "Query?", back: "CRUD ops." },
    { front: "Associations?", back: "Relations." }
  ],

  "jwt": [
    { front: "JWT?", back: "Authentication token." },
    { front: "Header?", back: "Meta info." },
    { front: "Payload?", back: "Data." },
    { front: "Signature?", back: "Verification." },
    { front: "Use?", back: "Secure APIs." }
  ],

  /* ================= SQL ================= */
  "sql-select": [
    { front: "SELECT?", back: "Fetch data." },
    { front: "JOIN?", back: "Combine tables." },
    { front: "WHERE?", back: "Filter rows." },
    { front: "ORDER BY?", back: "Sort data." },
    { front: "LIMIT?", back: "Restrict rows." }
  ],

  "sql-agg": [
    { front: "COUNT?", back: "Total rows." },
    { front: "SUM?", back: "Total value." },
    { front: "AVG?", back: "Average." },
    { front: "GROUP BY?", back: "Group rows." },
    { front: "HAVING?", back: "Filter groups." }
  ],

  "sql-normalization": [
    { front: "Normalization?", back: "Reduce redundancy." },
    { front: "1NF?", back: "Atomic values." },
    { front: "2NF?", back: "Remove partial dep." },
    { front: "3NF?", back: "Remove transitive." },
    { front: "Purpose?", back: "Efficient DB." }
  ],

  "sql-indexing": [
    { front: "Index?", back: "Speed query." },
    { front: "Primary key?", back: "Unique ID." },
    { front: "Unique index?", back: "No duplicates." },
    { front: "Composite?", back: "Multiple columns." },
    { front: "Downside?", back: "More storage." }
  ],

  /* ================= DEVOPS ================= */
  "docker": [
    { front: "Docker?", back: "Container tool." },
    { front: "Image?", back: "Blueprint." },
    { front: "Container?", back: "Running app." },
    { front: "Dockerfile?", back: "Build file." },
    { front: "Use?", back: "Deploy apps." }
  ],

  "github-actions": [
    { front: "CI/CD?", back: "Automation." },
    { front: "Workflow?", back: "Steps." },
    { front: "Trigger?", back: "Event." },
    { front: "Runner?", back: "Executes job." },
    { front: "Use?", back: "Deploy/test." }
  ],

  "jenkins": [
    { front: "Jenkins?", back: "CI tool." },
    { front: "Pipeline?", back: "Steps." },
    { front: "Plugin?", back: "Extension." },
    { front: "Build?", back: "Compile/test." },
    { front: "Deploy?", back: "Release app." }
  ],

  /* ================= SECURITY ================= */
  "owasp": [
    { front: "OWASP?", back: "Security risks list." },
    { front: "Top 10?", back: "Major threats." },
    { front: "Injection?", back: "Code attack." },
    { front: "Auth issues?", back: "Weak login." },
    { front: "XSS?", back: "Script attack." }
  ],

  "xss-sql": [
    { front: "XSS?", back: "Script injection." },
    { front: "SQL Injection?", back: "DB attack." },
    { front: "Prevention?", back: "Validation." },
    { front: "Escape input?", back: "Yes." },
    { front: "Sanitize?", back: "Clean data." }
  ],

  "firewalls": [
    { front: "Firewall?", back: "Blocks threats." },
    { front: "VPN?", back: "Secure connection." },
    { front: "Encryption?", back: "Secure data." },
    { front: "Port?", back: "Entry point." },
    { front: "Security layer?", back: "Protection." }
  ],

  /* ================= ML ================= */
  "logistic": [
    { front: "Logistic regression?", back: "Classification." },
    { front: "Sigmoid?", back: "Activation." },
    { front: "Binary output?", back: "Yes." },
    { front: "Use?", back: "Prediction." },
    { front: "Probability?", back: "0 to 1." }
  ],

  "kmeans": [
    { front: "K-means?", back: "Clustering." },
    { front: "Centroid?", back: "Center." },
    { front: "K?", back: "Clusters." },
    { front: "Distance?", back: "Euclidean." },
    { front: "Unsupervised?", back: "Yes." }
  ],

  /* ================= DSA ================= */
  "linkedlist": [
    { front: "Linked list?", back: "Nodes connected." },
    { front: "Node?", back: "Data + pointer." },
    { front: "Types?", back: "Singly, doubly." },
    { front: "Head?", back: "Start node." },
    { front: "Dynamic?", back: "Yes." }
  ],

  "stack-queue": [
    { front: "Stack?", back: "LIFO." },
    { front: "Queue?", back: "FIFO." },
    { front: "Push?", back: "Insert." },
    { front: "Pop?", back: "Remove." },
    { front: "Use?", back: "Data handling." }
  ],

  "trees": [
    { front: "Tree?", back: "Hierarchical DS." },
    { front: "Root?", back: "Top node." },
    { front: "Leaf?", back: "End node." },
    { front: "Binary tree?", back: "2 children." },
    { front: "Traversal?", back: "Inorder." }
  ],

  "graphs": [
    { front: "Graph?", back: "Nodes + edges." },
    { front: "Directed?", back: "One way." },
    { front: "Undirected?", back: "Two way." },
    { front: "DFS?", back: "Depth search." },
    { front: "BFS?", back: "Breadth search." }
  ]

};


/* =========================
   VIDEOS (ALL TOPICS)
========================= */

export const videos = {
  "py-files": [
    { title: "Python File Handling", url: "https://www.youtube.com/embed/Uh2ebFW8OYM" }
  ],
  "py-loops": [
    { title: "Python Loops", url: "https://www.youtube.com/embed/6iF8Xb7Z3wQ" }
  ],
  "py-functions": [
    { title: "Python Functions", url: "https://www.youtube.com/embed/9Os0o3wzS_I" }
  ],

  "html5": [
    { title: "HTML5 Full Course", url: "https://www.youtube.com/embed/pQN-pnXPaVg" }
  ],
  "css": [
    { title: "CSS Tutorial", url: "https://www.youtube.com/embed/1Rs2ND1ryYc" }
  ],
  "css-grid": [
    { title: "CSS Grid Tutorial", url: "https://www.youtube.com/embed/rg7Fvvl3taU" }
  ],
  "responsive": [
    { title: "Responsive Design", url: "https://www.youtube.com/embed/srvUrASNj0s" }
  ],
  "sass": [
    { title: "SASS Tutorial", url: "https://www.youtube.com/embed/Zz6eOVaaelI" }
  ],

  "js-functions": [
    { title: "JavaScript Functions", url: "https://www.youtube.com/embed/PkZNo7MFNFg" }
  ],
  "js-prototypes": [
    { title: "Prototypes & Classes", url: "https://www.youtube.com/embed/riDVvXZ_Kb4" }
  ],
  "js-es6": [
    { title: "ES6 Modules", url: "https://www.youtube.com/embed/NCwa_xi0Uuc" }
  ],
  "js-performance": [
    { title: "JS Performance", url: "https://www.youtube.com/embed/koky8mDdtAk" }
  ],

  "react-props": [
    { title: "React Props", url: "https://www.youtube.com/embed/SqcY0GlETPk" }
  ],
  "react-hooks": [
    { title: "React Hooks", url: "https://www.youtube.com/embed/TNhaISOUy6Q" }
  ],
  "react-context": [
    { title: "React Context API", url: "https://www.youtube.com/embed/5LrDIWkK_Bc" }
  ],
  "react-router": [
    { title: "React Router", url: "https://www.youtube.com/embed/Law7wfdg_ls" }
  ],
  "redux": [
    { title: "Redux Toolkit", url: "https://www.youtube.com/embed/CVpUuw9XSjY" }
  ],

  "express": [
    { title: "Express.js APIs", url: "https://www.youtube.com/embed/L72fhGm1tfE" }
  ],
  "mongodb": [
    { title: "MongoDB & Mongoose", url: "https://www.youtube.com/embed/ofme2o29ngU" }
  ],
  "sequelize": [
    { title: "Sequelize ORM", url: "https://www.youtube.com/embed/Fbu7z5dXcRs" }
  ],
  "jwt": [
    { title: "JWT Authentication", url: "https://www.youtube.com/embed/7Q17ubqLfaM" }
  ],

  "sql-select": [
    { title: "SQL SELECT & JOINS", url: "https://www.youtube.com/embed/HXV3zeQKqGY" }
  ],
  "sql-agg": [
    { title: "SQL Aggregation", url: "https://www.youtube.com/embed/7S_tz1z_5bA" }
  ],
  "sql-normalization": [
    { title: "SQL Normalization", url: "https://www.youtube.com/embed/GFQaEYEc8_8" }
  ],
  "sql-indexing": [
    { title: "SQL Indexing", url: "https://www.youtube.com/embed/fsG1XaZEa78" }
  ],

  "docker": [
    { title: "Docker Basics", url: "https://www.youtube.com/embed/3c-iBn73dDE" }
  ],
  "github-actions": [
    { title: "GitHub Actions", url: "https://www.youtube.com/embed/R8_veQiYBjI" }
  ],
  "jenkins": [
    { title: "Jenkins Tutorial", url: "https://www.youtube.com/embed/FX322RVNGj4" }
  ],

  "owasp": [
    { title: "OWASP Top 10", url: "https://www.youtube.com/embed/hryt-rCLJUA" }
  ],
  "xss-sql": [
    { title: "XSS & SQL Injection", url: "https://www.youtube.com/embed/ciNHn38EyRc" }
  ],
  "firewalls": [
    { title: "Firewalls & VPNs", url: "https://www.youtube.com/embed/kDEX1HXybrU" }
  ],

  "logistic": [
    { title: "Logistic Regression", url: "https://www.youtube.com/embed/zM4VZR0px8E" }
  ],
  "kmeans": [
    { title: "K-Means Clustering", url: "https://www.youtube.com/embed/4b5d3muPQmA" }
  ],

  "linkedlist": [
    { title: "Linked List", url: "https://www.youtube.com/embed/NobHlGUjV3g" }
  ],
  "stack-queue": [
    { title: "Stacks & Queues", url: "https://www.youtube.com/embed/wjI1WNcIntg" }
  ],
  "trees": [
    { title: "Binary Trees", url: "https://www.youtube.com/embed/oSWTXtMglKE" }
  ],
  "graphs": [
    { title: "Graphs", url: "https://www.youtube.com/embed/tWVWeAqZ0WU" }
  ]
};
