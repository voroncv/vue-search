var app = new Vue({
    el: '#app',
    data: {
        searchString: "",
        articles: [
            {
                "title": "What You Need To Know About CSS Variables",
                "url": "http://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/",
                "image": "http://cdn.tutorialzine.com/wp-content/uploads/2016/03/css-variables-100x100.jpg"
            },
            {
                "title": "What freebie: 4 Great Looking Pricing Tables",
                "url": "http://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/",
                "image": "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/great-looking-pricing-tables-100x100.jpg"
            },
            {
                "title": "20 Interesting JavaScript and CSS Libraries for February 2016",
                "me": "sasha",
                "url": "http://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/",
                "image": "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/interesting-resources-february-100x100.jpg"
            }
        ],
    paginate: ['articles']
    },
    computed: {
        filteredArticles() {
            let articles_array = this.articles
            let searchString = this.searchString

            if(!searchString){
                return articles_array
            }

            searchString = searchString.trim().toLowerCase()

            articles_array = articles_array.filter(function(item){
                if(item.title.toLowerCase().indexOf(searchString) !== -1){
                    return item
                }
            })
            return articles_array
        }
    }
})