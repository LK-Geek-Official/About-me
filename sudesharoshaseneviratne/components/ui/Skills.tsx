"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

interface Skill {
  name: string;
  level: SkillLevel;
  icon: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Programming Languages");

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: "/skills/programming.svg",
      skills: [
        { name: "Python", level: "Beginner", icon: "/skills/python.svg" },
        { name: "Java", level: "Beginner", icon: "/skills/java.svg" },
        { name: "C", level: "Beginner", icon: "/skills/c.svg" },
        { name: "JavaScript", level: "Beginner", icon: "/skills/javascript.svg" },
        { name: "TypeScript", level: "Beginner", icon: "/skills/typescript.svg" },
        { name: "HTML", level: "Intermediate", icon: "/skills/html.svg" },
        { name: "CSS", level: "Intermediate", icon: "/skills/css.svg" },
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: "/skills/framework.svg",
      skills: [
        { name: "React", level: "Intermediate", icon: "/skills/react.svg" },
        { name: "Angular", level: "Beginner", icon: "/skills/angular.svg" },
        { name: "Vue.js", level: "Beginner", icon: "/skills/vue.svg" },
        { name: "Svelte", level: "Beginner", icon: "/skills/svelte.svg" },
        { name: "Next.js", level: "Beginner", icon: "/skills/nextjs.svg" },
        { name: "Nuxt.js", level: "Beginner", icon: "/skills/nuxt.svg" },
        { name: "Tailwind CSS", level: "Intermediate", icon: "/skills/tailwind.svg" },
        { name: "Bootstrap", level: "Intermediate", icon: "/skills/bootstrap.svg" },
        { name: "Framer Motion", level: "Intermediate", icon: "/skills/framer.svg" },
        { name: "React Native", level: "Intermediate", icon: "/skills/react-native.svg" },
      ]
    },
    {
      title: "Databases",
      icon: "/skills/database.svg",
      skills: [
        { name: "MySQL", level: "Beginner", icon: "/skills/mysql.svg" },
        { name: "MongoDB", level: "Beginner", icon: "/skills/mongodb.svg" },
        { name: "Firebase", level: "Beginner", icon: "/skills/firebase.svg" },
        { name: "Supabase", level: "Beginner", icon: "/skills/supabase.svg" },
      ]
    },
    {
      title: "Version Control",
      icon: "/skills/programming.svg",
      skills: [
        { name: "GitHub", level: "Intermediate", icon: "/skills/github.svg" },
        { name: "GitLab", level: "Beginner", icon: "/skills/gitlab.svg" },
        { name: "Bitbucket", level: "Beginner", icon: "/skills/bitbucket.svg" },
        { name: "Git CLI", level: "Intermediate", icon: "/skills/git.svg" },
      ]
    },
    {
      title: "UI/UX Design",
      icon: "/skills/design.svg",
      skills: [
        { name: "Figma", level: "Intermediate", icon: "/skills/figma.svg" },
        { name: "Framer", level: "Intermediate", icon: "/skills/framer.svg" },
        { name: "Adobe Photoshop", level: "Intermediate", icon: "/skills/photoshop.svg" },
        { name: "Canva", level: "Intermediate", icon: "/skills/canva.svg" },
      ]
    },
    {
      title: "Project Management Tools",
      icon: "/skills/management.svg",
      skills: [
        { name: "Jira", level: "Beginner", icon: "/skills/jira.svg" },
        { name: "ClickUp", level: "Beginner", icon: "/skills/clickup.svg" },
        { name: "Notion", level: "Beginner", icon: "/skills/notion.svg" },
        { name: "MS 365", level: "Advanced", icon: "/skills/ms365.svg" },
        { name: "Agile", level: "Beginner", icon: "/skills/ms365.svg" },
      ]
    },
    {
      title: "Code Editors & IDEs",
      icon: "/skills/editor.svg",
      skills: [
        { name: "VS Code", level: "Intermediate", icon: "/skills/vscode.svg" },
        { name: "IntelliJ IDEA", level: "Intermediate", icon: "/skills/intellij.svg" },
        { name: "PyCharm", level: "Intermediate", icon: "/skills/pycharm.svg" },
        { name: "Android Studio", level: "Beginner", icon: "/skills/android-studio.svg" },
        { name: "GitHub Codespaces", level: "Beginner", icon: "/skills/github.svg" },
        { name: "CodeBlocks", level: "Intermediate", icon: "/skills/codeblocks.svg" },
      ]
    },
    {
      title: "AI Integrated DevOps Tools",
      icon: "/skills/ai.svg",
      skills: [
        { name: "GitHub Copilot", level: "Intermediate", icon: "/skills/copilot.svg" },
        { name: "Cursor AI", level: "Intermediate", icon: "/skills/cursor.svg" },
        { name: "Windsurf", level: "Beginner", icon: "/skills/windsurf.svg" },
        { name: "Continue.dev", level: "Beginner", icon: "/skills/continue.svg" },
        { name: "V0 Dev", level: "Intermediate", icon: "/skills/v0.svg" },
        { name: "Lovable", level: "Intermediate", icon: "/skills/lovable.svg" },
        { name: "Replit", level: "Beginner", icon: "/skills/replit.svg" },
        { name: "Bolt.new", level: "Intermediate", icon: "/skills/bolt.svg" },
        { name: "Firebase Studio", level: "Beginner", icon: "/skills/firebase.svg" },
        { name: "Relumi.io", level: "Beginner", icon: "/skills/relumi.svg" },
      ]
    },
    {
      title: "Familiar LLMs",
      icon: "/skills/llm.svg",
      skills: [
        { name: "OpenAI", level: "Intermediate", icon: "/skills/openai.svg" },
        { name: "Anthropic", level: "Intermediate", icon: "/skills/anthropic.svg" },
        { name: "DeepSeek", level: "Intermediate", icon: "/skills/deepseek.svg" },
        { name: "Gemini", level: "Intermediate", icon: "/skills/gemini.svg" },
        { name: "Microsoft Copilot", level: "Intermediate", icon: "/skills/gemini.svg" },
        { name: "Blackbox.ai", level: "Intermediate", icon: "/skills/blackbox.svg" },
        { name: "Hugging Face", level: "Beginner", icon: "/skills/huggingface.svg" },
        { name: "Open Router", level: "Beginner", icon: "/skills/openrouter.svg" },
        { name: "n8n", level: "Beginner", icon: "/skills/n8n.svg" },
      ]
    }
  ];

  const getLevelWidth = (level: SkillLevel) => {
    switch (level) {
      case "Beginner": return "w-1/3";
      case "Intermediate": return "w-2/3";
      case "Advanced": return "w-full";
      default: return "w-0";
    }
  };

  const getLevelColor = (level: SkillLevel) => {
    switch (level) {
      case "Beginner": return "bg-yellow-500";
      case "Intermediate": return "bg-blue-500";
      case "Advanced": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section id="skills" className="min-h-screen py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="section-fade-in">
          <h2 className="text-4xl font-bold mb-12 text-center"><u>Skills & Technologies</u></h2>
          
          {/* Category Selection */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {skillCategories.map((category) => (
              <motion.button
                key={category.title}
                onClick={() => setSelectedCategory(category.title)}
                className={`px-6 py-3 rounded-full transition-all text-lg font-semibold
                  ${selectedCategory === category.title 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.title}
              </motion.button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories
              .find(cat => cat.title === selectedCategory)?.skills
              .map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 p-6 rounded-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`absolute h-full rounded-full transition-all duration-500 ${getLevelColor(skill.level)} ${getLevelWidth(skill.level)}`}
                      style={{ width: skill.level === "Beginner" ? "33.33%" : skill.level === "Intermediate" ? "66.66%" : "100%" }}
                    />
                  </div>
                  <p className="text-sm text-gray-400 mt-2">{skill.level}</p>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
} 