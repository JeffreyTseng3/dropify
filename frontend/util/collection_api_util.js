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


export const deleteCollectionItem = id => {
    return $.ajax({
        method: "DELETE",
        url: `/api/follows/${id}`,
        
    })
}
