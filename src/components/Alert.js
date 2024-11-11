export default function Alert(props){
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    return (
    <div style={{height: '57px',padding: '5px 5px 5px 5px'}}>
        {props.alert && (props.alert.msg) && (props.alert.type) && <div className={`d-${(props.alert==null)?'none':'block'} alert alert-success alert-dismissible fade show`} style={{height: '100%'}} role="alert">
            <strong>{capitalize(props.alert.type)}:</strong> {props.alert.msg}
        </div>}
    </div>
    )
}