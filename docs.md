## Migrations

In a database migration, you move data from `source` databases to `target` databases.

```

"create": "typeorm migration:create ./src/migrations/LearningMigration"
"generate": "typeorm migration:generate -n PostRefactoring"
"migrate": "npx typeorm-ts-node-commonjs migration:run -d src/data-source",
"revert": "npx typeorm-ts-node-commonjs migration:revert -d src/data-source"


"create": typeorm migration:create ./path-to-migrations-dir/PostRefactoring

```

- create

```

scripts {
    create: typeorm migration:create ./src/migrations/LearningMigrations
}

```

This generates a new migration file with `SQL` that needs to be executed to update the changes in the database.

The `name` of the migration should be descriptive like a
Git commit.
For example:

`ChangesColumnUsers`

- run

To run the migration

```
script {

    run: typeorm migration:run -d ./src/migrations/
}
```

It's throwing an error . When I remove the `-d` argument it asks for the`DataSource` argument (which it's `-d` option) , then it throws this error

```
Error during migration run:
Error: Unable to open file: "/Users/fabiana/Documents/code/task-management-nestjs/data-source.ts". Cannot use import statement outside a module
    at Function.loadDataSource (/Users/fabiana/Documents/code/task-management-nestjs/node_modules/typeorm/commands/CommandUtils.js:22:19)
    at async Object.handler (/Users/fabiana/Documents/code/task-management-nestjs/node_modules/typeorm/commands/MigrationRunCommand.js:41:26)

```

- revert
