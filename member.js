function skillsMember(){
    var skills = ["HTML", "CSS", "JS", "React", "Python", "Django", "Flask", "Git", "Linux", "Docker"];
    var skill = skills[Math.floor(Math.random() * skills.length)];
    document.getElementById("skills").innerHTML = skill;
}