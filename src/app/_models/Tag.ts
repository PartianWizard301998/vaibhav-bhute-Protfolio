export class Tag{

        static readonly ANGULAR = new Tag('Angular', 'red');
        static readonly TYPESCRIPT = new Tag('TypeScript', 'blue');
        static readonly JAVASCRIPT = new Tag('JavaScript', '#5F8670');
        static readonly JAVA = new Tag('Java', 'green');
        static readonly HTML = new Tag('HTML5', 'purple');
        static readonly CSS = new Tag('CSS3', 'darken');
        static readonly GIT = new Tag('Git', '#C21292');
        static readonly FIREBASE = new Tag('Firebase', 'brown');
        static readonly JSP = new Tag('JSP', '#392467');
        static readonly VSCODE = new Tag ('VS Code', '#FFB534')
        static readonly ECLIPSE = new Tag ('Eclips IDE', '#FE7A36')
        static readonly APACHE_TOMCAT = new Tag ('Apache Tomcat', '#5F0F40')
        static readonly MYSQL = new Tag ('MySQL', '#0766AD')
        static readonly MONGODB = new Tag ('MongoDB', '#0706AD')
        static readonly EXPRESSJS = new Tag ('Express JS', '#0766MD')
        static readonly NODEJS = new Tag ('NodeJS', '#1766AD')
        static readonly POSTMAN = new Tag ('Postman', '#236712')
        static readonly BOOTSTRAP = new Tag ('Bootstrap', '#KHJ234');



    private constructor(private readonly key:string, public readonly color:string){



    }


    toString(){    
        return this.key;
    }
}