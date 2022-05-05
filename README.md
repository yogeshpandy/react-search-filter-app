# react-search-filter-app
A Web based application that renders data from a json based on the search filter input

This Application uses data available from online and renders it in application

Features:
  Search Control
  Lists All Data in a Card element
  
 Component Structure
 App Component
 components:
  Search Component:
      This component renders a search box which takes input and initiates handler function to search for results.
  Card List Component:
       This Component lists all the data's processed by the search component. It maps the data to each card component.
    Card component (Child Component)
      This component renders the data passed from the parent(Card List) component in a card
  
