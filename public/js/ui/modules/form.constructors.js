export const Constructors = function()
{
    this.Col = function( args )
    {
        // required
        Object.defineProperty( this, "name",
        {
            value: args.name,
            enumerable: true,
            writeable: false,
            configurable: false
        } );

        this.break = !!args.break;

        this.type = args.type || "text";

        // suggested
        this.value = args.value || "";
        this.handlers = args.handlers || [];
        this.required = args.required || false;

        // optional
        this.col = args.col || 0;
        this.row = args.row || 0;

        // only if defined
        if ( args.destination )
            this.destination = args.destination;

        if ( args.icon )
            this.icon = args.icon;

        if ( args.options )
            this.options = args.options;
        else
            if ( args.source )
                this.source = args.source;
    };

    this.Destination = function( args )
    {
        this.key = args.key;

        if ( args.path )
        {
            this.type = "db";
            this.path = args.path;
            this.output = args.output || "static";

            if ( args.map )
                this.map = args.map;

            return;
        }

        if ( args.data )
        {
            this.type = "object";
            this.data = args.data;
        }
    };

    this.Handler = function( args )
    {
        this.event = args.event;
        this.handler = args.handler || console.warn( this.event, "is not defined" );
    };

    this.Option = function( text, value )
    {
        this.text = text;
        this.value = typeof value == "undefined" ? text : value;
    };

    this.Source = function( args )
    {
        this.key = args.key;

        if ( args.path )
        {
            this.type = "db";
            this.path = args.path;
            this.output = args.output || "static";

            if ( args.map )
                this.map = args.map;

            return;
        }

        if ( args.data )
        {
            this.type = "object";
            this.data = args.data;
        }
    };
};