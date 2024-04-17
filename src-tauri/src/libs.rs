trait ICommands {
    fn create_portal() -> String;
    fn connect_postgres() -> String;
    fn connect_mysql() -> String;
    fn connect_mongo() -> String;

}

#[tauri::command]
fn greet(name: &str) -> String {
   format!("Hello pope, {}!", name)
}

struct ListOfCommands;


impl ICommands for ListOfCommands {
    
}