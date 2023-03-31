/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (TPerson) com as propriedades id, name, email, password e role;
2. Type Aliases para 2 contas (AdminAccount, NormalAccount) com as propriedades account e permission;
3. Crie exemplos de usuários Admin e Normal;
*/

/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL e atribua ã propriedade role do Tperson;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;

*/ 



//2.1 (criamos e enum e o role do type person foi tipado com enum, aí no usser na propriedade role, ele recebe o enum ROLE.ADMIN ou Role.NORMAL)
enum ROLE {
    ADMIN = "Admin",
    NORMAL = "Normal"
};

//1.1.
//role: Admin | normal
type TPerson ={
    id:string,
    name: string,
    email:string,
    password:string,
    role: ROLE
};

//1.2.

type TAdminAccount ={
    account:string,
    permision:boolean
};

type TNormalAccount={
    account:string,
    permission:boolean
};

//2.2.
//(criei um novo type que junta os types Tperson e TAdminAccount, se eu tipar meu usuer com esse novo tpe,ele tera que ter as propriedades de Tperson E de TAdminAccount. Outra forma seria eu tipar o user assim: user:Tperson & TAdminAccount)
type TAdminUser = TPerson & TAdminAccount

type TNormalUser = TPerson & TNormalAccount



//1.3.

const user1:TAdminUser = {

    id:"1",
    name: "Humberto",
    email:"Humberto@email.com",
    password:"123456",
    role: ROLE.ADMIN,
    account:"001",
    permision:true  
};

const user2:TNormalUser = {

    id:"2",
    name: "Joselito",
    email:"joselito@email.com",
    password:"654321",
    role: ROLE.NORMAL,
    account:"002",
    permission:false
};

const arrayAdminUsers : Array<TAdminUser> =[]
const arrayNormalUsers : TNormalUser[] =[]

// poderiamos fazer uma função de vlaidar usuarios pra inserir no array

const validarUsuario = (usuarios: any):void=>{

    if(usuarios.role !== ROLE.ADMIN){
        arrayNormalUsers.push(usuarios)
    }else{
        arrayAdminUsers.push (usuarios)
    }


}

validarUsuario(user1)
validarUsuario(user2)

console.table(arrayNormalUsers)
console.table( arrayAdminUsers)




