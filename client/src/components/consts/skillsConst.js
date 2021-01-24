export const  skillsLabelsBySkill =  {
    html: "HTML",
    css: "CSS",
    git: "Git",
    javascript: "JavaScript",
    react: "React",
    node: "Node.js",
    sql: "SQL",
  };
  export const skills = Object.keys(skillsLabelsBySkill);
  export const skillLabel = (skill) => skillsLabelsBySkill[skill];
      
  