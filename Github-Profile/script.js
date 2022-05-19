const search = document.querySelector("#search");
const profileTemplate = document.querySelector("#profile-template");
const container = document.querySelector("#container");

search.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getUserInfo(search.value);
    search.blur();
    search.value = "";
  }
});

async function getUserInfo(name) {
  try {
    const res = await fetch(`https://api.github.com/users/${name}`);
    const user = await res.json();

    fillUserInfo(user);
    getUserRepos(user.repos_url, name);
  } catch (err) {
    notFound(name);
  }
}

async function getUserRepos(repoUrl, name) {
  try {
    const res = await fetch(repoUrl);
    const repos = await res.json();

    createReposSection(repos);
  } catch (err) {
    notFound(name);
  }
}

function fillUserInfo(user) {
  container.innerHTML = "";
  container.append(profileTemplate.content.cloneNode(true));

  container.querySelector(".profile-img").src = user.avatar_url;
  container.querySelector(".profile-img").alt = `${user.login} Github Avatar`;
  container.querySelector(".name").innerHTML = user.name;
  container.querySelector(".user-name").innerHTML = user.login;
  container.querySelector(
    ".followers"
  ).innerHTML = `${user.followers} Folowers`;
  container.querySelector(
    ".following"
  ).innerHTML = `${user.following} Following`;
  container.querySelector(".repo").innerHTML = `${user.public_repos} Repos`;
}

function createReposSection(repos) {
  const reposSection = container.querySelector(".discover-repos");

  const max = Math.min(repos.length, 5);

  for (let i = 0; i < max; i++) {
    const repo = document.createElement("a");
    repo.href = `https://github.com/${repos[i].full_name}`;
    repo.append(document.createTextNode(repos[i].name));

    reposSection.append(repo);
  }
}

function notFound(name) {
  container.innerHTML = "";

  const errMessage = document.createElement("div");
  errMessage.append(
    document.createTextNode(`Not Found a User With The Name: ${name}`)
  );
  errMessage.className = "error-message";

  container.append(errMessage);
}
