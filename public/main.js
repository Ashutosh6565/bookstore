function deleteProduct(id){
    const result = confirm('Are you sure you want to delelte the product ?');
    if(result){
        fetch('/delete-product/' + id, {
            method: 'Post',}).then((res) => {
                if(res.ok){
                    location.reload();
                }
            })
        }
    }
