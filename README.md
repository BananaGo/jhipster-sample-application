# jhipster Sample Application

This application was generated using JHipster 6.4.1, you can find documentation and help at [https://www.jhipster.tech/documentation-archive/v6.4.1](https://www.jhipster.tech/documentation-archive/v6.4.1).

# Generation

Boilerplate **Spring Boot** / **Angular** application

### jHipster command cli

![](https://github.com/BananaGo/jhipster-sample-application/blob/master/assets/1_functionality.png)

## (2) Application Type

![](https://github.com/BananaGo/jhipster-sample-application/blob/master/assets/Screenshot2019-11-07at20.09.06.png)

---

![](https://github.com/BananaGo/jhipster-sample-application/blob/master/assets/Screenshot2019-11-07at20.39.24.png)

---

![](https://github.com/BananaGo/jhipster-sample-application/blob/master/assets/Screenshot2019-11-07at20.39.43.png)

### [Empty](https://github.com/BananaGo/jhipster-sample-application)

---

![](https://github.com/BananaGo/jhipster-sample-application/blob/master/assets/Screenshot2019-11-08at02.26.56.png)

## Features

| Step                         | Features                                                                  |                                                                                                                                                                                             |
| ---------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Application Type             | Monolithic application (recommended for simple projects)                  |                                                                                                                                                                                             |
|                              | Microservice application                                                  |                                                                                                                                                                                             |
|                              | Microservice gateway                                                      |                                                                                                                                                                                             |
| Configure, Monitoring, Scale | Hipster Registry                                                          | [Eureka server](https://cloud.spring.io/spring-cloud-netflix/spring-cloud-netflix.html), [Spring Cloud Config server](https://cloud.spring.io/spring-cloud-config/spring-cloud-config.html) |
| Authentication               | JWT authentication (stateless, with a token)                              | https://jwt.io/                                                                                                                                                                             |
|                              | OAuth 2.0 / OIDC Authentication (stateful, works with Keycloak and Okta)  | https://www.keycloak.org/, https://www.okta.com/                                                                                                                                            |
|                              | HTTP Session Authentication (stateful, default Spring Security mechanism) | https://spring.io/projects/spring-security                                                                                                                                                  |
| Database                     | SQL (H2, MySQL, MariaDB, PostgreSQL, Oracle, MSSQL)                       |                                                                                                                                                                                             |
|                              | NoSQL/Document (MongoDB, Couchbase, Cassandra)                            |                                                                                                                                                                                             |
| Spring cache abstraction     | Hazelcast implementation (distributed cache, for multiple nodes)          | Distributed cache                                                                                                                                                                           |
|                              | Memcached                                                                 | Distributed Cache                                                                                                                                                                           |
| Java Build                   | Maven                                                                     |                                                                                                                                                                                             |
|                              | Gradle                                                                    |                                                                                                                                                                                             |
| Socket                       | Elasticsearch                                                             | Search Engine                                                                                                                                                                               |
|                              | Spring Websocket, Apache Kafka Messaging                                  | messaging                                                                                                                                                                                   |
|                              | OpenAPI-generator, Swagger                                                |                                                                                                                                                                                             |
| Java Testing                 | Unit                                                                      |                                                                                                                                                                                             |
| Javascript Testring          | Jest                                                                      |                                                                                                                                                                                             |
| Client Framework             | AngularTS                                                                 | Framework + CLI                                                                                                                                                                             |
|                              | React                                                                     | Libarieisch                                                                                                                                                                                 |
|                              | VueJS (not core)                                                          | Mix from Angular and React                                                                                                                                                                  |
| i18n                         | English, Deutsch, Arabic, Chinese                                         | Internationalization                                                                                                                                                                        |
| Client Testing               | Gatling                                                                   | load testing                                                                                                                                                                                |
|                              | Cucumber                                                                  |                                                                                                                                                                                             |
|                              | Protractor                                                                | angular end-to-end                                                                                                                                                                          |

## Result

![Screenshot 2019-11-08 at 02.25.33](/Users/xray/jhipster/jhipster-sample-application/assets/Screenshot 2019-11-08 at 02.25.33.png)

## Admin

![Screenshot 2019-11-08 at 02.26.15](/Users/xray/jhipster/jhipster-sample-application/assets/Screenshot 2019-11-08 at 02.26.15.png)

## _JHipster Domain Language_ (_JDL_)

![Screenshot 2019-11-08 at 02.30.35](/Users/xray/jhipster/jhipster-sample-application/blob/master/assets/Screenshot202019-11-0820at2002.30.35.png)

```
entity Region {
	regionName String
}

entity Country {
	countryName String
}

// an ignored comment
/** not an ignored comment */
entity Location {
	streetAddress String,
	postalCode String,
	city String,
	stateProvince String
}

entity Department {
	departmentName String required
}

/**
 * Task entity.
 * @author The JHipster team.
 */
entity Task {
	title String,
	description String
}

/**
 * The Employee entity.
 */
entity Employee {
	/**
	* The firstname attribute.
	*/
	firstName String,
	lastName String,
	email String,
	phoneNumber String,
	hireDate Instant,
	salary Long,
	commissionPct Long
}

entity Job {
	jobTitle String,
	minSalary Long,
	maxSalary Long
}

entity JobHistory {
	startDate Instant,
	endDate Instant,
	language Language
}

enum Language {
    FRENCH, ENGLISH, SPANISH
}

relationship OneToOne {
	Country{region} to Region
}

relationship OneToOne {
	Location{country} to Country
}

relationship OneToOne {
	Department{location} to Location
}

relationship ManyToMany {
	Job{task(title)} to Task{job}
}

// defining multiple OneToMany relationships with comments
relationship OneToMany {
	Employee{job} to Job,
	/**
	* A relationship
	*/
	Department{employee} to
	/**
	* Another side of the same relationship
	*/
	Employee
}

relationship ManyToOne {
	Employee{manager} to Employee
}

// defining multiple oneToOne relationships
relationship OneToOne {
	JobHistory{job} to Job,
	JobHistory{department} to Department,
	JobHistory{employee} to Employee
}

// Set pagination options
paginate JobHistory, Employee with infinite-scroll
paginate Job with pagination

// Use Data Transfert Objects (DTO)
// dto * with mapstruct

// Set service options to all except few
service all with serviceImpl except Employee, Job

// Set an angular suffix
// angularSuffix * with mySuffix

```

> [JDL Examples](https://github.com/jhipster/jdl-samples)
>
> [Application](https://github.com/BananaGo/jhipster-sample-application/tree/enteties)

## Development

Before you can build this project, you must install and configure the following dependencies on your machine:

1. [Node.js][]: We use Node to run a development web server and build the project.
   Depending on your system, you can install Node either from source or as a pre-packaged bundle.

After installing Node, you should be able to run the following command to install development tools.
You will only need to run this command when dependencies change in [package.json](package.json).

    npm install

We use npm scripts and [Webpack][] as our build system.

Run the following commands in two separate terminals to create a blissful development experience where your browser
auto-refreshes when files change on your hard drive.

    ./mvnw
    npm start

Npm is also used to manage CSS and JavaScript dependencies used in this application. You can upgrade dependencies by
specifying a newer version in [package.json](package.json). You can also run `npm update` and `npm install` to manage dependencies.
Add the `help` flag on any command to see how you can use it. For example, `npm help update`.

The `npm run` command will list all of the scripts available to run for this project.

### PWA Support

JHipster ships with PWA (Progressive Web App) support, and it's disabled by default. One of the main components of a PWA is a service worker.

The service worker initialization code is commented out by default. To enable it, uncomment the following code in `src/main/webapp/index.html`:

```html
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js').then(function() {
      console.log('Service Worker Registered');
    });
  }
</script>
```

Note: [Workbox](https://developers.google.com/web/tools/workbox/) powers JHipster's service worker. It dynamically generates the `service-worker.js` file.

### Managing dependencies

For example, to add [Leaflet][] library as a runtime dependency of your application, you would run following command:

    npm install --save --save-exact leaflet

To benefit from TypeScript type definitions from [DefinitelyTyped][] repository in development, you would run following command:

    npm install --save-dev --save-exact @types/leaflet

Then you would import the JS and CSS files specified in library's installation instructions so that [Webpack][] knows about them:
Edit [src/main/webapp/app/vendor.ts](src/main/webapp/app/vendor.ts) file:

```
import 'leaflet/dist/leaflet.js';
```

Edit [src/main/webapp/content/scss/vendor.scss](src/main/webapp/content/scss/vendor.scss) file:

```
@import '~leaflet/dist/leaflet.css';
```

Note: There are still a few other things remaining to do for Leaflet that we won't detail here.

For further instructions on how to develop with JHipster, have a look at [Using JHipster in development][].

### Using Angular CLI

You can also use [Angular CLI][] to generate some custom client code.

For example, the following command:

    ng generate component my-component

will generate few files:

    create src/main/webapp/app/my-component/my-component.component.html
    create src/main/webapp/app/my-component/my-component.component.ts
    update src/main/webapp/app/app.module.ts

### Doing API-First development using openapi-generator

[OpenAPI-Generator]() is configured for this application. You can generate API code from the `src/main/resources/swagger/api.yml` definition file by running:

```bash
./mvnw generate-sources
```

Then implements the generated delegate classes with `@Service` classes.

To edit the `api.yml` definition file, you can use a tool such as [Swagger-Editor](). Start a local instance of the swagger-editor using docker by running: `docker-compose -f src/main/docker/swagger-editor.yml up -d`. The editor will then be reachable at [http://localhost:7742](http://localhost:7742).

Refer to [Doing API-First development][] for more details.

## Building for production

### Packaging as jar

To build the final jar and optimize the jhipsterSampleApplication application for production, run:

    ./mvnw -Pprod clean verify

This will concatenate and minify the client CSS and JavaScript files. It will also modify `index.html` so it references these new files.
To ensure everything worked, run:

    java -jar target/*.jar

Then navigate to [http://localhost:8080](http://localhost:8080) in your browser.

Refer to [Using JHipster in production][] for more details.

### Packaging as war

To package your application as a war in order to deploy it to an application server, run:

    ./mvnw -Pprod,war clean verify

## Testing

To launch your application's tests, run:

    ./mvnw verify

### Client tests

Unit tests are run by [Jest][] and written with [Jasmine][]. They're located in [src/test/javascript/](src/test/javascript/) and can be run with:

    npm test

For more information, refer to the [Running tests page][].

### Code quality

Sonar is used to analyse code quality. You can start a local Sonar server (accessible on http://localhost:9001) with:

```
docker-compose -f src/main/docker/sonar.yml up -d
```

You can run a Sonar analysis with using the [sonar-scanner](https://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Scanner) or by using the maven plugin.

Then, run a Sonar analysis:

```
./mvnw -Pprod clean verify sonar:sonar
```

If you need to re-run the Sonar phase, please be sure to specify at least the `initialize` phase since Sonar properties are loaded from the sonar-project.properties file.

```
./mvnw initialize sonar:sonar
```

or

For more information, refer to the [Code quality page][].

## Using Docker to simplify development (optional)

You can use Docker to improve your JHipster development experience. A number of docker-compose configuration are available in the [src/main/docker](src/main/docker) folder to launch required third party services.

For example, to start a mysql database in a docker container, run:

    docker-compose -f src/main/docker/mysql.yml up -d

To stop it and remove the container, run:

    docker-compose -f src/main/docker/mysql.yml down

You can also fully dockerize your application and all the services that it depends on.
To achieve this, first build a docker image of your app by running:

    ./mvnw -Pprod verify jib:dockerBuild

Then run:

    docker-compose -f src/main/docker/app.yml up -d

For more information refer to [Using Docker and Docker-Compose][], this page also contains information on the docker-compose sub-generator (`jhipster docker-compose`), which is able to generate docker configurations for one or several JHipster applications.

## Continuous Integration (optional)

To configure CI for your project, run the ci-cd sub-generator (`jhipster ci-cd`), this will let you generate configuration files for a number of Continuous Integration systems. Consult the [Setting up Continuous Integration][] page for more information.

[jhipster homepage and latest documentation]: https://www.jhipster.tech
[jhipster 6.4.1 archive]: https://www.jhipster.tech/documentation-archive/v6.4.1
[using jhipster in development]: https://www.jhipster.tech/documentation-archive/v6.4.1/development/
[using docker and docker-compose]: https://www.jhipster.tech/documentation-archive/v6.4.1/docker-compose
[using jhipster in production]: https://www.jhipster.tech/documentation-archive/v6.4.1/production/
[running tests page]: https://www.jhipster.tech/documentation-archive/v6.4.1/running-tests/
[code quality page]: https://www.jhipster.tech/documentation-archive/v6.4.1/code-quality/
[setting up continuous integration]: https://www.jhipster.tech/documentation-archive/v6.4.1/setting-up-ci/
[node.js]: https://nodejs.org/
[yarn]: https://yarnpkg.org/
[webpack]: https://webpack.github.io/
[angular cli]: https://cli.angular.io/
[browsersync]: https://www.browsersync.io/
[jest]: https://facebook.github.io/jest/
[jasmine]: https://jasmine.github.io/2.0/introduction.html
[protractor]: https://angular.github.io/protractor/
[leaflet]: https://leafletjs.com/
[definitelytyped]: https://definitelytyped.org/
[openapi-generator]: https://openapi-generator.tech
[swagger-editor]: https://editor.swagger.io
[doing api-first development]: https://www.jhipster.tech/documentation-archive/v6.4.1/doing-api-first-development/
