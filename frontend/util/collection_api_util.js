export const createCollectionItem = data => {
    return $.ajax({
        method: "POST",
        url: "/api/follows",
        data: { data },
    })
}

export const fetchCollection = () => {
    return $.ajax({
        method: "GET",
        url: "/api/follows",
    })
}