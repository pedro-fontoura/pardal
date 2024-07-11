window.addEventListener(
    'load',
    ( _ ) => {
        Array.from(
            document
                .getElementById( 'list' )
                .getElementsByTagName( 'tr' )
        ).forEach(
            ( tr ) => {
                if ( tr.dataset.id !== undefined ) {
                    tr.addEventListener( 'click', onClickRow );
                }
            }
        );
    }
);

const onClickRow = function ( evt ) {
    var tr = evt.target;
    while ( tr.tagName !== 'TR' ) {
        tr = tr.parentNode;
    }
    window.open( 'jogar.html?id=' + tr.dataset.id );
};