// const { ethers } = require("ethers");
// deploy es una función asincrona
const deploy = async () => {
    // getSigners() trae la información que traemos desde nuestra llave privada
    // deployer es un objeto que nos permite desplegar contratos a la red que tengamos configurada
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contract with the account:", deployer.address);
    // Definimos Vexi en el contexto
    const Vexi = await ethers.getContractFactory("Vexi");
    // Instancia del contracto desplegado
    const deployed = await Vexi.deploy(10000);

    console.log("Vexi NFTs is deployed at:", deployed.address);
};

// Llamando la función deploy()
deploy()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });