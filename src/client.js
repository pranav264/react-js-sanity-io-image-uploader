import createClient from "@sanity/client";

const client = createClient({
    projectId: "tiyjjcyb",
    dataset: "production",
    apiVersion: "2023-02-10",
    token: "skgPmrafqs4Fm76gLh7tGmSvbJQUCYg5UrZQMG5MePde5PlAi2KKyCVXWbxiLo3Nr30lTyuOMbuHE6U5os2cyf8XliL5eI7WVsVJySqxty91wLImiOtTybW9TWvAKkjYtrnf0HhtcBUHJohw6BcAt4rNuGqvrhaRGP0JQrUc1xmiUDa9WWxM",
    useCdn: false
});

export default client;