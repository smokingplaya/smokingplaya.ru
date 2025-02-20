# smokingplaya.ru
A source code of my personal single-page [website](https://smokingplaya.ru)

# used technologies
* [bun.sh](https://bun.sh/) as js/ts runtime
* [vite](https://vitejs.dev/) as frontend tooling
* [react](https://react.dev/) as ui framework
* [tailwind css](https://tailwindcss.com/) as main css framework
* [docker](https://docker.com/) as a tool for deploying a container to a host machine

# installation
```bash
bun install
bun run dev
```

# building
> [!NOTE]
>
> Notice: If you are using ``docker build``  you don't need to build it.
```bash
bun run build
```
it saves builded website into ``./dist/`` folder

# usage

```bash
docker build -t smokingplayaru .
docker-compose up -d
```