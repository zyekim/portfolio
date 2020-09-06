
	var pageNamePattern = 'store_'; // define the pattern of the html page name (http://www....../HtmlPage1.html)
       var firstPage = 1, lastPage = 4; // initialise the starting and ending page

       $(function () {
           var next = GetNextPageNumber();
           var nexturl =  pageNamePattern + next + '.html';
           var prev = GetPrevPageNumber();
           var prevurl =  pageNamePattern + prev + '.html';
           //$('#next').click(function () { window.location =nexturl });
           //$('#prev').click(function () { window.location = prevurl });

           $('#next').attr('href', nexturl);
           $('#prev').attr('href', prevurl);

       });

       function GetCurrentPageNumber() {
           var path = window.location.pathname;
           var page = path.split("/").pop();
           page = page.replace(pageNamePattern, '').replace('.html', '').replace('#', '');
           return parseInt(page);
       }
       function GetNextPageNumber() {
           var current = GetCurrentPageNumber();
           current++;
           if (current > lastPage) // if last page, then dont increment the counter, either stay in same page or navigate to very fist page.
               current = lastPage;
           return current;
       }
       function GetPrevPageNumber() {
           var current = GetCurrentPageNumber();
           current--;
           if (current < firstPage) // if last page, then dont increment the counter, either stay in same page or navigate to very fist page.
               current = firstPage;
           return current;
       }


