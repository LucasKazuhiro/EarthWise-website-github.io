document.addEventListener("DOMContentLoaded", function(){
    console.log("teste")
    const repoName = "EarthWise-website-host";
    const linkElements = document.querySelectorAll(".create-repo-link");

    linkElements.forEach(linkElement => {
        const originalHref = linkElement.getAttribute("href");
        const fullLink = `${repoName}${originalHref}`;
        linkElement.href = fullLink;
    })

})