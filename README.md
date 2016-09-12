# angular2-exercise
A starter project to learn the angular 2 ecosystem and provide a user repository search of github.

## Code Example

```typescript
  private makeRequest(path: string) {
    let params = new URLSearchParams();
    params.set('per_page', '100');

    let url = `https://api.github.com/${ path }`;
    return this.http.get(url, {search: params})
      .map((res) => res.json());
  }
```

##How to start
  * clone the repository
  * npm install (*npm version 3.10.7 was used*)
  * npm start


##Future Improvements
  * switch systemjs for webpack to manage modules
  * create a central folder to contain all transpiled ts
  * Add a testing framework, probably jasmine with karma
  

