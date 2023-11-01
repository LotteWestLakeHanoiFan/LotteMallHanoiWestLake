const DB_META = {};

const membersDB_Meta_Relative_URL = "MembersDB_Meta.json"
async function get_latest_db_version(onSuccessCallback){
    let response = await fetch(membersDB_Meta_Relative_URL)
    if (response.ok){
        onSuccessCallback(await response.json());
    } else {
        alert(`HTTP-Error: ${response.status}`);
    }
}

function set_DB_META(meta) {
    DB_META.name = "MEMBERS_DB";
    DB_META.version = meta.latestVersion;
}

function redirectToMembersDB_reader() {
    location.href = "MembersDB_reader.html";
}

function redirectToMembers_DB(){
    location.href="MEMBERS_DB.html";
}



