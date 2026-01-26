# Around The World

A lightweight, static web app that visualizes visited vs. pending places on an interactive **Highcharts Highmaps** world map, with **drilldown** support for:
- **United States** (state-level)
- **India** (state/UT-level, disputed map variant)

The visited/pending status is controlled via simple arrays in `js/index.js`.

<p align="center">
  <img src="images/first_look.png">
</p>

This is an example of visited countries. Countries that have been visited are marked in dark green on the map. 

<p align="center">
  <img src="images/visited.png">
</p>

Countries that I have not yet visited are marked in light green. 
<p align="center">
  <img src="images/pending.png">
</p>

## Preview

Screenshots (stored in `images/`):
- `images/first_look.png`
- `images/pending.png`
- `images/visited.png`

---

## Features

- Interactive world map (pan/zoom controls, hover highlighting)
- Two status categories:
  - **Visited**
  - **Pending**
- Drilldown maps:
  - `us` → US states
  - `in` → India states/UTs (disputed territories map)
- Simple customization: edit arrays of `hc-key` codes

---

## Tech Stack

- HTML + JavaScript
- jQuery
- Highcharts Highmaps (local vendor assets under `js/lib/`)
- Map datasets:
  - `custom/world`
  - `countries/us/us-all`
  - `countries/in/custom/in-all-disputed`

---

## To run use Docker/Podman

### Build:
```bash
docker build -t around-the-world:latest .
```

### Run:
```bash
docker build -t around-the-world:latest .
docker run --rm -p 8080:80 --name around-the-world around-the-world:latest
```


### Podman:
```bash
  podman build -t around-the-world:latest .
  podman run --rm -p 8080:80 --name around-the-world around-the-world:latest
```



### Open: http://localhost:8080


## Customization

Mark countries as visited

Edit this array in `js/index.js`:

```js
const visited_countries = [
  'pl', 'de', 'fr', 'gb', ...
];
```

Mark US states as visited

Edit:

```js
const visited_states_in_us = [
  'us-ca', 'us-ny', ...
];
```

Mark Indian states/UTs as visited

Edit:

```js
const visited_states_in_india = [
  'in-ka', 'in-mh', ...
];
```

**Important:** the entries must match Highcharts `hc-key` values from the corresponding map dataset.


## Troubleshooting
### Blank map / missing shapes

- Confirm the script paths in index.html match your repository layout.

- Open browser DevTools → Console/Network to spot 404s for world.js, us-all.js, or the India dataset.

- Drilldown does nothing

- Ensure the datasets are loaded:

```js
Highcharts.maps['countries/us/us-all']

Highcharts.maps['countries/in/custom/in-all-disputed']
```

- Confirm the `hc-key` checks in `js/index.js` match the dataset keys.

## Demo

[Demo link](https://a-dubaj.github.io/Around.The.World/)