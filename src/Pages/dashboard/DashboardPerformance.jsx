import React from 'react';
import PropTypes from 'prop-types';

import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
const DashboardPerformance = () => {
    return (
        <div>
            <PowerBIEmbed
    embedConfig = {{
        type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
        id: 'f0167fee-4c43-4b4e-9a5c-ad1f6752e5a1',
        embedUrl:  'https://app.powerbi.com/reportEmbed?reportId=f0167fee-4c43-4b4e-9a5c-ad1f6752e5a1&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUZSQU5DRS1DRU5UUkFMLUEtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d',
        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNTEzNDg2ZWMtNjY0My00ZjE3LWE1MDgtNzY0NzgzMTFiZTQyLyIsImlhdCI6MTY5Mjg5MjEzNSwibmJmIjoxNjkyODkyMTM1LCJleHAiOjE2OTI4OTY1MjQsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFXQjd6eGx2NWhVMXdvdmtuU1pzaWt1RlhhRmtVSXkxaWFGWHQvNHJ3dm9KVURpMmNXMk9wdkZHOUVIc2FIT2d6IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiYm91a2hyaXMiLCJnaXZlbl9uYW1lIjoiT25zIiwiaXBhZGRyIjoiMTk3LjMuMjQxLjIyMCIsIm5hbWUiOiJPbnMgYm91a2hyaXMiLCJvaWQiOiJlMWIwODZlZC03Y2IwLTQ1NTctOTFmZC1lMzBjNzJmZTdlYzEiLCJwdWlkIjoiMTAwMzIwMDJCMzE1NDEzMSIsInJoIjoiMC5BVjhBN0lZMFVVTm1GMC1sQ0haSGd4Ry1RZ2tBQUFBQUFBQUF3QUFBQUFBQUFBQmZBRnMuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiQnduZUExS2NWSXdEaVJYN0c4RmFhdG9JSHAwdUswTURsYjhwQ1czWnZBYyIsInRpZCI6IjUxMzQ4NmVjLTY2NDMtNGYxNy1hNTA4LTc2NDc4MzExYmU0MiIsInVuaXF1ZV9uYW1lIjoib25zLmJvdWtocmlzQGVzcHJpdHRuMS5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJvbnMuYm91a2hyaXNAZXNwcml0dG4xLm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6Imw0aUlOT3FQZlVHTUdERllZcjhZQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.eTSSb3U5soPL68wfDXO_Z_hHfCy3uEo1PW6jR74SeK5LcbAxf89QFSGxWJFRyTGmHel_tNNMQhdB2KRUdfdXajs294eQgOzzOf7Q3e9INjE0TA6sbx2HxMfzo45gl9Xpxf9OmH5r_amXEP30K9MgMuVUpmOwGKKuFJZspEBXo2i9ADEGytt-4foLTtSdwe_u2HVeQliDhfVfUksjpjV7HXJ1VzL6nlJJEJePtZE_YSXUoc6TFwU9w0IZzFuiEcOkIrI6VHvHEEgITmOIqeMpoZ0IRf_pK3LPIh8ltuaVasAEVXGNleDn0I0N9D_oUdEv0zmS9mZeDs00rV4JJ1NzWA',

        tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
        settings: {
            panes: {
                filters: {
                    expanded: false,
                    visible: false
                }
            },
            background: models.BackgroundType.Transparent, 
        
        }
    }}

    eventHandlers = {
        new Map([
            ['loaded', function () {console.log('Report loaded');}],
            ['rendered', function () {console.log('Report rendered');}],
            ['error', function (event) {console.log(event.detail);}],
            ['visualClicked', () => console.log('visual clicked')],
            ['pageChanged', (event) => console.log(event)],
        ])
    }

    cssClassName = { "embed-dashboard" }

    getEmbeddedComponent = { (embeddedReport) => {
        window.report = embeddedReport 
    }}
/>
        </div>
    );
};


DashboardPerformance.propTypes = {

};


export default DashboardPerformance;