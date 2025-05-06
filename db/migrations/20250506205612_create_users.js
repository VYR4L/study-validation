/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('username').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.string('role').defaultTo('user').comment('admin/partial/user');
    table.string('photo').comment('URL da foto do usuário');
    table.timestamps(true, true); // Cria `created_at` e `updated_at` automaticamente

    // Indexes
    table.index(['email', 'password'], 'login');
    table.index('username', 'name');
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists('users');
}