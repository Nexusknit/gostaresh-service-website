import{storeToRefs as n}from"pinia";import{U as o}from"./server.mjs";function useAuth(){const s=o(),{token:t,isLoggedIn:i,user:e,permissions:u}=n(s);return{token:t,isLoggedIn:i,user:e,permissions:u,login:async function(n){await s.login(n)},logout:async function(){await s.logout()},fetchMe:async function(n){await s.fetchMe(n)}}}export{useAuth as u};
//# sourceMappingURL=useAuth-BCA76F4T.mjs.map
