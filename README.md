# React Router v6 useParams Hook Error

This repository demonstrates a common error encountered when using the `useParams` hook in React Router v6.  The error arises when attempting to access route parameters from a component that is not nested within a route that defines those parameters.  The solution provided corrects this by ensuring proper nesting within the appropriate route structure.

## Problem

The `useParams` hook in React Router v6 is designed to retrieve parameters from the URL based on the current route.  However, it only works correctly when used within a component that's nested under a route that matches the parameters in the URL.

## Solution

The solution involves correctly nesting the component that uses `useParams` within the corresponding route definition.