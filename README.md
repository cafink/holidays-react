# Holidays around the world

A front-end holiday app.

## Set Up

Build:

```
docker build -t holiday-fe .
```

Run:

```
docker run --rm -p 5173:5173 holiday-fe
```

Then visit [localhost:5173](http://localhost:5173/) with the back-end server running on port 5254.

## To Do

- Additional pages/views
- Disambiguate holidays w/ same name & date
- Use environment variable for back-end URL