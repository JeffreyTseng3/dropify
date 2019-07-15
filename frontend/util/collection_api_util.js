export const createCollectionItem = data => {
    return $.ajax({
        method: "POST",
        url: "/api/follows",
        data: { data },
    })
}