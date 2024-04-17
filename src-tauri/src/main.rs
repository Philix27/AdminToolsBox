mod commands;

use commands::{connect_mongo, connect_mysql, connect_postgres, create_portal, greet};

// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#[cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            greet,
            create_portal,
            connect_postgres,
            connect_mysql,
            connect_mongo
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
