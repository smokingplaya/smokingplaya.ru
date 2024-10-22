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
docker run -d -p 80:80 -p 443:443 smokingplayaru
```

# ssl

> [!WARNING]
>
> Your ssl certificates will be stored in the docker image. Live with it.

Generate a certificate on the machine on which this docker container will be lifted.
```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout privkey.pem -out fullchain.pem
```