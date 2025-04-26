const https = require('https');
const fs = require('fs');
const path = require('path');

const icons = {
    // Category icons
    categories: [
        { name: 'programming', url: 'https://raw.githubusercontent.com/heroicons/heroicons/master/24/solid/code-bracket.svg' },
        { name: 'framework', url: 'https://raw.githubusercontent.com/heroicons/heroicons/master/24/solid/puzzle-piece.svg' },
        { name: 'database', url: 'https://raw.githubusercontent.com/heroicons/heroicons/master/24/solid/circle-stack.svg' },
        { name: 'design', url: 'https://raw.githubusercontent.com/heroicons/heroicons/master/24/solid/paint-brush.svg' },
        { name: 'management', url: 'https://raw.githubusercontent.com/heroicons/heroicons/master/24/solid/clipboard-document-list.svg' },
        { name: 'editor', url: 'https://raw.githubusercontent.com/heroicons/heroicons/master/24/solid/code-bracket-square.svg' },
        { name: 'ai', url: 'https://raw.githubusercontent.com/heroicons/heroicons/master/24/solid/cpu-chip.svg' },
        { name: 'llm', url: 'https://raw.githubusercontent.com/heroicons/heroicons/master/24/solid/light-bulb.svg' }
    ],
    // Technology icons from Simple Icons
    technologies: [
        // Existing icons
        { name: 'python', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/python.svg' },
        { name: 'java', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/java.svg' },
        { name: 'c', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/c.svg' },
        { name: 'javascript', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/javascript.svg' },
        { name: 'typescript', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/typescript.svg' },
        { name: 'html', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/html5.svg' },
        { name: 'css', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/css3.svg' },
        { name: 'react', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/react.svg' },
        { name: 'angular', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/angular.svg' },
        { name: 'vue', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/vuedotjs.svg' },
        { name: 'svelte', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/svelte.svg' },
        { name: 'nextjs', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nextdotjs.svg' },
        { name: 'nuxt', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nuxtdotjs.svg' },
        { name: 'tailwind', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/tailwindcss.svg' },
        { name: 'bootstrap', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/bootstrap.svg' },
        { name: 'framer', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/framer.svg' },
        { name: 'mysql', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mysql.svg' },
        { name: 'mongodb', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mongodb.svg' },
        { name: 'firebase', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/firebase.svg' },
        { name: 'supabase', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/supabase.svg' },
        // New icons
        { name: 'github', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg' },
        { name: 'gitlab', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/gitlab.svg' },
        { name: 'bitbucket', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/bitbucket.svg' },
        { name: 'git', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/git.svg' },
        { name: 'figma', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/figma.svg' },
        { name: 'photoshop', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/adobephotoshop.svg' },
        { name: 'canva', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/canva.svg' },
        { name: 'jira', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/jira.svg' },
        { name: 'clickup', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/clickup.svg' },
        { name: 'notion', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/notion.svg' },
        { name: 'ms365', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/microsoft.svg' },
        { name: 'vscode', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/visualstudiocode.svg' },
        { name: 'intellij', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/intellijidea.svg' },
        { name: 'pycharm', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/pycharm.svg' },
        { name: 'android-studio', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/androidstudio.svg' },
        { name: 'copilot', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/githubcopilot.svg' },
        { name: 'replit', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/replit.svg' },
        { name: 'openai', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/openai.svg' },
        { name: 'anthropic', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/anthropic.svg' },
        { name: 'huggingface', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/huggingface.svg' }
    ]
};

// Create a placeholder SVG for icons that don't have a URL
const createPlaceholderSvg = (name) => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect width="20" height="20" x="2" y="2" rx="2" ry="2"/>
        <text x="12" y="12" text-anchor="middle" dominant-baseline="middle" font-size="8">${name}</text>
    </svg>`;
    
    const filepath = path.join(__dirname, 'public', 'skills', `${name}.svg`);
    fs.writeFileSync(filepath, svg);
    console.log(`Created placeholder: ${name}.svg`);
};

// Download or create placeholder for each icon
const processIcon = (icon) => {
    if (icon.url) {
        downloadIcon(icon.url, `${icon.name}.svg`);
    } else {
        createPlaceholderSvg(icon.name);
    }
};

const downloadIcon = (url, filename) => {
    const filepath = path.join(__dirname, 'public', 'skills', filename);
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded: ${filename}`);
        });
    }).on('error', (err) => {
        fs.unlink(filepath, () => {});
        console.error(`Error downloading ${filename}: ${err.message}`);
        // Create placeholder for failed downloads
        createPlaceholderSvg(filename.replace('.svg', ''));
    });
};

// Process all icons
icons.categories.forEach(icon => processIcon(icon));
icons.technologies.forEach(icon => processIcon(icon));

// Create placeholders for missing icons
const missingIcons = [
    'cursor', 'windsurf', 'continue', 'v0', 'lovable', 'bolt', 'relumi',
    'deepseek', 'gemini', 'blackbox', 'openrouter', 'n8n', 'codeblocks'
];

missingIcons.forEach(name => createPlaceholderSvg(name)); 