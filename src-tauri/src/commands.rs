#[tauri::command]
pub fn greet(name: &str) -> String {
    format!("Hello pope, {}!", name)
}

#[tauri::command]
pub fn create_portal(name: &str) -> String {
    format!("Hello pope, {}!", name)
}

#[tauri::command]
pub fn connect_postgres(name: &str) -> String {
    format!("Hello pope, {}!", name)
}

#[tauri::command]
pub fn connect_mysql(name: &str) -> String {
    format!("Hello pope, {}!", name)
}

#[tauri::command]
pub fn connect_mongo(name: &str) -> String {
    format!("Hello pope, {}!", name)
}
