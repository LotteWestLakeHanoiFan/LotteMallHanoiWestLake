const membersDB_Meta_Relative_URL = "MembersDB_Meta.json"
async function get_latest_db_version(onSuccessCallback){
    let response = await fetch(membersDB_Meta_Relative_URL)
    if (response.ok){
        onSuccessCallback(await response.json());
    } else {
        alert(`HTTP-Error: ${response.status}`);
    }
}