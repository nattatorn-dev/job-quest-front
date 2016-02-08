import React from 'react';

export default class DropdownList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let trip = {
                groupItems: [
                    {
                      groupName: 'Bangkok and surroundings',
                      rowitem: [
                          {name: 'Bangkok', value: 'Bangkok'},
                          {name: 'Ayutthaya', value: 'Ayutthaya'},
                          {name: 'Chanthaburi', value: 'Chanthaburi'},
                          {name: 'Chonburi', value: 'Chonburi'},
                          {name: 'Karnchanaburi', value: 'Karnchanaburi'},
                          {name: 'Nakhon Nayok', value: 'Nakhon Nayok'},
                          {name: 'Nakhon Pathom', value: 'Nakhon Pathom'},
                          {name: 'Nonthaburi', value: 'Nonthaburi'},
                          {name: 'Pathum Thani', value: 'Pathum Thani'},
                          {name: 'Pattaya', value: 'Pattaya'},
                          {name: 'Samut Prakarn', value: 'Samut Prakarn'},
                          {name: 'Samut Songkhram', value: 'Samut Songkhram'},
                          {name: 'Saraburi', value: 'Saraburi'},
                          {name: 'Suphan Buri', value: 'Suphan Buri'}
                      ]
                    },
                    {
                      groupName: 'Northeast',
                      rowitem: [
                          {name: 'Buriram', value: 'Buriram'},
                          {name: 'Khon Kaen', value: 'Khon Kaen'},
                          {name: 'Loei', value: 'Loei'},
                          {name: 'Nong Khai City', value: 'Nong Khai City'},
                          {name: 'Sakon Nakhon', value: 'Sakon Nakhon'},
                          {name: 'Udon Thani', value: 'Udon Thani'}
                      ]
                    }
                ]
              };
        const groups = trip.groupItems;
        let groupindex = 0;
        let itemindex = 0;

        return (
              <div>
              {
                  groups.map(function (group) {
                      groupindex += 1;
                      let items = group.rowitem.map(function (item) {
                          itemindex += 1;
                          return (
                              <option key={itemindex} value={item.value}>{item.name}</option>
                          );
                      });

                      return (
                          <optgroup key={groupindex} label={group.groupName}>
                              {items}
                          </optgroup>
                      );
                  })
              }
              </div>
        );
    }
}

DropdownList.displayName = 'DropdownList';
