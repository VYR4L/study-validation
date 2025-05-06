/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('payments', (table) => {
        table.increments('id').primary();
        table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
        table.decimal('value', 10, 2).notNullable();
        table.string('receipt').notNullable();
        table.string('photo');
        table.string('observation');
        table.dateTime('payment_date').notNullable();
        table.boolean('checked_payment').defaultTo(false);
        table.timestamps(true, true); // Cria `created_at` e `updated_at` automaticamente

        // Indexes
        table.index(['user_id', 'payment_date'], 'user_payment_date');
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTableIfExists('payments');
}
