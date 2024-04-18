export class AppPages {
  static dashboard = "/dashboard"
  static repositories = "/repositories"
  static integrations = "/integrations"

  static frontend = {
    storybook: "/frontend/storybook",
    vitest: "/frontend/vitest",
    cypress: "/frontend/cypress",
    sentry: "/frontend/sentry",
    githubActions: "/frontend/github",
    graphql: "/frontend/gql",
    restApi: "/frontend/gql",
  }

  static backend = {
    providers: "/backend/storybook",
    test: "/backend/vitest",
    graphql: "/backend/graphql",
    sentry: "/backend/sentry",
  }
  static database = {
    postgres: "/database/postgres",
    mysql: "/database/mysql",
    mongodb: "/database/mongodb",
    mariadb: "/database/mariadb",
  }
}
