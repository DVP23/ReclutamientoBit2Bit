# **ReclutamientoBit2Bit**

##### Correr Backend:

(En otra terminal o simbolo del sistema).

Para empezar el programa, primero se necesita especificar la ruta para ingresar a la carpeta llamada: **qa-bit** 

1. > C:\Users\admin\Desktop\ReclutamientoBit2Bit> cd qa-bit
- A diferencia del caso anterior, ahora necesitamos especificar la direccion a otra carpeta llamada **api**, una vez que estemos dentro de la carpeta qa-bit.
2. > C:\Users\admin\Desktop\ReclutamientoBit2Bit\qa-bit> cd api

(En este caso los archivos tambien se encuentran en el escritorio del adminisrador).

Una vez que se cumplieron los pasos de dirección. 
- Solo agregamos el comando:
> nodemon index.js 

## ¡Listo, nuestro backend empezará a correr!

**Nuestro backend se encuentra direccionado en el puerto: 3030**

Para verlo, solo ingresa esta dirección en tu buscador: [http://localhost:3030](http://localhost:3030)

---------------------------------------------------------------------------------------------------------------------------

# Para la base de datos.

(En otra terminal o simbolo del sistema, una tercera).

#### Lo que se hizo fue hacer los siguientes pasos para la creación de la misma.

Dentro de la carpeta ReclutamientoBit2Bit.

Especificando la dirección:
> C:\Users\admin\Desktop\ReclutamientoBit2Bit>

Seguimos los siguientes pasos:
> mysql -u root -p

Nos pedira la contraseña para ingresar.
**Una vez especificada, hacemos la creación de la base de datos.**
> create database reclutamiento; 

Posteriormente hacemos el cambio de base de datos.
> use reclutamiento;

Para finalmente hacer la creación de la tabla users.
- Con los siguientes comandos.
> CREATE TABLE IF NOT EXISTS users(
	  id int auto_increment PRIMARY KEY,
    username varchar(255) not null,
    password varchar(255) null
);

## ¡Listo, la base de datos fue creada!
