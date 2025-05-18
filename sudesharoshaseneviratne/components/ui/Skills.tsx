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
        { name: "Framer Motion", level: "Intermediate", icon: "/" },
        { name: "React Native", level: "Intermediate", icon: "/skills/react.svg" },
      ]
    },
    {
      title: "Databases",
      icon: "/skills/database.svg",
      skills: [
        { name: "MySQL", level: "Beginner", icon: "/skills/mysql.svg" },
        { name: "MongoDB", level: "Beginner", icon: "/" },
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
        { name: "Notion", level: "Beginner", icon: "/" },
        { name: "MS 365", level: "Advanced", icon: "/skills/microsoft-365.svg" },
      ]
    },
    {
      title: "Code Editors & IDEs",
      icon: "/skills/editor.svg",
      skills: [
        { name: "VS Code", level: "Intermediate", icon: "/skills/vs-code.svg" },
        { name: "IntelliJ IDEA", level: "Intermediate", icon: "/skills/intellij.svg" },
        { name: "PyCharm", level: "Intermediate", icon: "/skills/pycharm.svg" },
        { name: "Android Studio", level: "Beginner", icon: "/skills/android-studio.svg" },
        { name: "GitHub Codespaces", level: "Beginner", icon: "/skills/github.svg" },
        { name: "CodeBlocks", level: "Intermediate", icon: "/skills/code-blocks.svg" },
      ]
    },
    {
      title: "AI Integrated DevOps Tools",
      icon: "/skills/ai.svg",
      skills: [
        { name: "GitHub Copilot", level: "Intermediate", icon: "/skills/github-copilot.svg" },
        { name: "Cursor AI", level: "Intermediate", icon: "/skills/cursor-ai.svg" },
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
        { name: "Liama", level: "Intermediate", icon: "/skills/meta.svg" },
        { name: "Microsoft Copilot", level: "Intermediate", icon: "/skills/copilot.svg" },
        { name: "Blackbox.ai", level: "Intermediate", icon: "/skills/blackbox.svg" },
        { name: "Hugging Face", level: "Beginner", icon: "/skills/huggingface.svg" },
        { name: "Open Router", level: "Beginner", icon: "/skills/openrouter.svg" },
        { name: "n8n", level: "Beginner", icon: "/skills/n8n.svg" },
      ]
    }
  ];

  const getProgressBarStyle = (level: SkillLevel) => {
    const width = level === "Beginner" ? "33%" : level === "Intermediate" ? "66%" : "100%";
    return {
      width,
      background: "linear-gradient(90deg, #4F46E5 0%, #7C3AED 50%, #DB2777 100%)"
    };
  };

  return (
    <section id="skills" className="min-h-screen py-20 bg-black">
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
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.title}
              </motion.button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="max-w-4xl mx-auto space-y-6">
            {skillCategories
              .find(cat => cat.title === selectedCategory)?.skills
              .map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center gap-6 mb-2">
                    <div className="flex items-center gap-3 w-48">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                      <span className="font-medium text-white">{skill.name}</span>
                    </div>
                    <div className="flex-1 relative h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={getProgressBarStyle(skill.level)}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute h-full rounded-full"
                      />
                    </div>
                    <span className="text-sm text-gray-400 w-24">{skill.level}</span>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
} 