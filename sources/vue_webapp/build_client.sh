#/bin/sh

mkdir -p ./dist_patch

echo "[i] Building vue app..."
npm run build

echo "[i] Copying built files to permanent folder"
rm -Rf ./dist_patch/*
cp -Rf ./dist/* ./dist_patch