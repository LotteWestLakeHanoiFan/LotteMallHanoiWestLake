const DB_META = {};

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


get_latest_db_version(set_DB_META)
