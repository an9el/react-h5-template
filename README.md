# Vite4, React18 (A simple generic example template)

This starter template includes:

- [Vite 4](https://vitejs.dev/guide/)
- [React18](https://react.docschina.org/)
- [React Router dom 6](https://reactrouter.com/en/main)
- [Mobx6](https://mobx.js.org/README.html)
- Introduce typescript, use tsx writing style.
- Aktiver Eslint,prettier,husky,automatisk specifikation af projektkode.

Unplugin Utilities:

- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - auto import the most used APIs

dev 环境地址：https://dev-deepinnet-h5.deepinnet.com:5173/?channelId=1
test 环境地址：https://test-deepinnet-h5.deepinnet.com:5173/?channelId=1

项目启动

sudo npm i mkcert -g
mkdir keys
cd keys
mkcert create-ca organization
mkcert create-cert --domains 127.0.0.1,localhost,dev-deepinnet-h5.deepinnet.com
