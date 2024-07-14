const routes = [
    { path: "/", view: ()=>{console.log("메인화면입니다.")} },
    { path: "/detail", view: ()=>{console.log("디테일페이지입니다.")} }
];

const App = async () => {
    
const pageMatches = routes.map(route => {
    return {
        route: route,
        isMatch: window.location.pathname === route.path,
    };
});

let match = pageMatches.find(pageMatch => pageMatch.isMatch);
console.log(match.route.view());
}

App();