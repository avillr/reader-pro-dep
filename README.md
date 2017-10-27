##Reader
This is a react web application that collects, organizes, and presents different tech news sources.

##Data Flow
Generally the flow of data will begin from the channel/feed/source picker in the sidebar.

The options are navlinks that modify the url and conditionally render the feed for a
given channel. First the URL is updated, this triggers the feed component to render, the feed component reads the url and sets the current channel based on the feed match param. The setCurrentChannel action makes a call to the NewsAPI which returns a list of articles (without content) which are then displayed in the feed.

Each feed element should be a Reader itself that expands based on its active status...

