export const search = searchInput => {
    return $.ajax({
        method: "GET",
        url: " /api/searches/search",
        data: {searchInput},
    })
}