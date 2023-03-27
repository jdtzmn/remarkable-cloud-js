export = REMARKABLEAPI;
declare class REMARKABLEAPI {
    constructor(device_token?: any);
    device_token: any;
    user_token: any;
    storage_host: string;
    notification_host: string;
    notification_ws: any;
    register_device(one_time_code: any, device_desc?: string, device_id?: any): Promise<any>;
    refresh_token(): Promise<any>;
    api({ url, method, headers, prop, body, raw_body, expected }: {
        url: any;
        method?: string;
        headers?: {};
        prop?: any;
        body?: any;
        raw_body?: any;
        expected?: string;
    }): Promise<any>;
    get_storage_host(): Promise<string>;
    storage_url_maker(endpoint: any): Promise<string>;
    get_notification_host(): Promise<string>;
    get_notification_ws(): Promise<any>;
    raw_docs(): Promise<any>;
    get_doc(ID: any, with_blob?: boolean): Promise<any>;
    upload_request(doc?: any): Promise<any>;
    update_status(doc: any, changed_doc_data: any): Promise<any>;
    delete(doc: any): Promise<any>;
    docs_paths(): Promise<any>;
    corrupted_docs(): Promise<any>;
    trashed_docs(): Promise<any>;
    get_path(path: any): Promise<any>;
    get_final_path(path: any): Promise<any>;
    get_path_content(path: any): Promise<any>;
    fix_corrupted_docs(move_to_path?: string): Promise<any>;
    get_ID(id: any): Promise<any>;
    get_name(name: any): Promise<any>;
    path_elements(full_path: any, check_exists?: boolean): Promise<{
        name: any;
        parent_path: any;
    }>;
    upload_zip_data(name: any, parent_path: any, type: any, zip_map: any, doc?: any): Promise<any>;
    exists(path: any): Promise<boolean>;
    unlink(path: any): Promise<any>;
    move(path: any, new_parent_path: any): Promise<any>;
    rename(path: any, new_name: any): Promise<any>;
    read_zip(path: any): Promise<any>;
    write_zip(path: any, zip_map: any, type: any): Promise<any>;
    mkdir(path: any): Promise<any>;
    copy(from_path: any, to_path: any, recursive?: boolean): Promise<any>;
    write_file_type(path: any, local_path: any, file_type: any, meta_override: any, path_reader?: any): Promise<any>;
    write_file_from_url(path: any, url: any, file_type: any, meta_override: any): Promise<any>;
    read_file_type(path: any, file_type: any): Promise<any>;
    write_pdf(path: any, pdf_path: any, metadata?: {}): Promise<any>;
    write_pdf_from_url(path: any, pdf_url: any, metadata?: {}): Promise<any>;
    read_pdf(path: any): Promise<any>;
    write_epub(path: any, epub_path: any, metadata?: {}): Promise<any>;
    write_epub_from_url(path: any, epub_url: any, metadata?: {}): Promise<any>;
    read_epub(path: any): Promise<any>;
    subscribe_to_notifications(handler: any, matching_properties?: any[]): Promise<boolean>;
}
declare namespace REMARKABLEAPI {
    namespace device_desc {
        namespace desktop {
            const windows: string;
            const macos: string;
            const linux: string;
        }
        namespace mobile {
            const android: string;
            const ios: string;
        }
        namespace browser {
            const chrome: string;
        }
    }
    namespace type {
        const document: string;
        const collection: string;
    }
    namespace notification {
        namespace event {
            const document_added: string;
            const document_deleted: string;
        }
    }
    namespace exception {
        function path_not_found(path: any): string;
        function update_error(error: any): string;
        function upload_request_error(error: any): string;
        function delete_error(error: any): string;
        function path_already_exists_error(error: any): string;
    }
}
//# sourceMappingURL=index.d.ts.map